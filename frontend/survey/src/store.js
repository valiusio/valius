import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
        brandName:"brand Name",
        questions: [
            {
                question:"",
                isTypeBoolean: false,
                examples:[]
            }
        ],
        questioner: [
            {
                label : "Σε ποια από τις παρακάτω κατηγορίες ανήκετε",
                answersCapacity: 1,
                predefinedAnswers:[
                    "Φοιτητής",
                    "Απόφοιτος",
                    "Ελεύθερος Επαγγελματίας",
                    "Δημόσιος Υπάλληλος",
                    "Ιδιωτικός Υπάλληλος",
                    "Επιχειρηματίας",
                    "Άλλο",
                ],
                answers: [],
            },
            {
                label : "Για ποιους λόγους αγοράζετε ένα προιόν σαν το {productName}",
                answersCapacity: 3,
                predefinedAnswers:[],
                answers: [],
            },
            {
                label : "Πως θα περιγράφατε τον εαυτό σου ως προς τη χρήση του προϊόντος {productName}?",
                answersCapacity: 1,
                predefinedAnswers:[
                    "Πολύ Ικανοποιημένος",
                    "Μέτρια Ικανοποιημένος",
                    "Μή Ικανοποιημένος",
                    "Ευκαιριακός χρήστης",
                    "Μή χρήστης",
                ],
                answers: [],
            },
        ]
  },
  mutations: {

  },
  getters: {
      state() {
          return this.state
      }
  },
  actions: {

  }
})
