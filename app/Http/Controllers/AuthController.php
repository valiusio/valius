<?php namespace App\Http\Controllers;

use App\authentication;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Mockery\Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;



class AuthController extends Controller
{
    final public function login(Request $request){
        $credentials = $request->only('email','password');
        try {
            if ( !$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error'=> 'Invalid Credentials'],400);
            }
        }catch(JWTException $e) {
            return response()->json(['code'=>$e->getCode(), 'message'=> $e->getMessage()],$e->getCode());
        }catch(\Throwable $th) {
            return response()->json(['code'=>$th->getCode(), 'message'=> $th->getMessage()],500);
        }


        $User = User::where('email', $request->input('email'))->first();
        return response()->json(compact('User','token'));
    }

    final public function logout(Request $request){
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return response()->json(['code' => 200, 'message' => 'Logout successful'], 200);
        } catch (JWTException $e) {
            return response()->json(['code' =>$e->getCode(),'message'=>$e->getMessage()], 500);
        }catch (\Throwable $th) {
            return response()->json(['code' =>$th->getCode(),'message'=>$th->getMessage()], 500);
        }
    }


}
