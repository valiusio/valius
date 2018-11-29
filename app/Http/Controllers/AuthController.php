<?php namespace App\Http\Controllers;
use \App\authendication as authendication;
use \App\User as User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Mockery\Exception;



class AuthController extends Controller
{
    private  $firstCredential  = 'email';
    private  $secondCredential = 'password';
    private  static $expiredInSHours = 24*15;

    public function login(Request $request){

        try {

            if(self::CheckAuth($request)){
                throw new Exception("You're already logged in",203);
            }

            $user = User::where($this->firstCredential, '=', $request->input($this->firstCredential))
                ->where($this->secondCredential, '=', hash('sha256', $request->input($this->secondCredential)))->first();

            if ($user) {

                $Authtoken = new authendication();
                $Authtoken->user()->associate($user);
                $Authtoken->_token = uniqid(base64_encode(str_random(60)));
                $Authtoken->created_at = Carbon::now();
                $Authtoken->expire_at = Carbon::now()->addHour(self::$expiredInSHours);
                $Authtoken->save();

                return response()->json(['code'=>200,'message'=>'You are logged in', 'token'=>$Authtoken->_token],200);

            }else{

                throw new Exception('Invalid Credentials',422);
            }


        }catch (Exception $e){

            return response()->json(['code'=>$e->getCode(), 'message'=>$e->getMessage()],422);

        }catch (\Throwable $th){

            return
                json_encode([
                    'code'=>$th->getCode(),
                    'message'=>$th->getMessage()
                ]);
        }

    }

    public function logout(Request $request){
        try {

            if(!self::CheckAuth($request)){
                throw new Exception("You have to log in first",203);
            }

            $token = authentication::where('_token','=',$request->header('Authorization'))->first();
            $token->delete();

            return  response()->json(['code'=>200,'message'=>'You are succesfully logged out'],200);

        }catch (Exception $e){

            return response()->json(['code'=>$e->getCode(),'message'=>$e->getMessage()],203);

        }catch (\Throwable $th){

            return json_encode([
                'code'=>$th->getCode(),
                'message'=>$th->getMessage()
            ]);
        }


    }


    public static function CheckAuth(Request $request){

        $token = $request->header('Authorization');

        if(!$token){
            return false;
        }

        $AuthendicationUser = authendication::where('_token','=',$token)->first();
        if( ! ($AuthendicationUser && $AuthendicationUser->expire_at > Carbon::now() )){
            return false;
        }

        return true;
    }
}
