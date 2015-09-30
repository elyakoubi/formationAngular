var questions = [
            {
                ques: 'Est-ce que tu aime le JavaScript ?',
                ans : 'Oui'
            },
            {
                ques: 'Le JavaScript est une évolution du Java ?',
                ans : 'Non'
            },
            {
                ques: 'Le JavaScript est proche du Java ?',
                ans : 'Non'
            },
            {
                ques: 'Le JavaScript est un langage d\'objet par prototypage ?',
                ans : 'Oui'
            },
            {
                ques: 'Le JavaScript est souvent utilisé coté client ?',
                ans : 'Oui'
            },
            {
                ques: 'Le JavaScript peut être utilisé coté client et serveur ?',
                ans : 'Oui'
            }
        ];

function prompt(){

    for(var i=0; i<questions.length; i++){

       // windows.prompt(questions[i].ques);

        console.log(questions[i].ques);

    }

}