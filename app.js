const searchUser = document.getElementById('searchUser');
const github = new GithubFind;
const ui = new UI;
searchUser.addEventListener('keyup', (e) => {
    
    if(e.target.value != ''){
        github.get(e.target.value).then(data => {
            if(data.userData.message === "Not Found"){
                ui.showAlert(data.userData.message, 'alert alert-danger');    
            }
            else{
                ui.showProfile(data.userData);
                ui.showRepos(data.repoData);
                console.log(data);
            }
        });
    }
    else{
        ui.clearProfile();
    }
})