import * as firebase from "firebase";

export default class FireAuth {

    constructor() {

        const config = {
            apiKey: "AIzaSyDRJua85eL_q2qGJ4X1CSwF5Kira9xj36U",
            authDomain: "reactblog-26ce6.firebaseapp.com",
            databaseURL: "https://reactblog-26ce6.firebaseio.com",
            projectId: "reactblog-26ce6",
            storageBucket: "reactblog-26ce6.appspot.com",
            messagingSenderId: "299085244021"
        };

        firebase.initializeApp(config);

    }


}