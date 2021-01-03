class GithubFind {
    constructor(){
        this.client_id = '5de36ec8892fa3c2e8e1';
        this.client_secret = '5ae5f8061a0748380db977994f7f72b51889066a'
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async get(user){
        const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const userData = await userResponse.json();
        const repoData = await repoResponse.json();
        return {
            userData,
            repoData
        }
    }
}