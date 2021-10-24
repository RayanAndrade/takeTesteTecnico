const axios = require("axios");
require("dotenv").config();

const getAllRepositories = async _ => {
    try {
        const allRepositories = await axios({
            method: "get",
            url: `https://api.github.com/users/${process.env.takeRepository}/repos`,
        }); 

        return allRepositories.data;
        
    } catch (error) {
        
        console.error("Houve um erro ao consultar o método getAllRepositories");
        console.error(error);
        
        const fakeResponse = [
            {
                "id": "fake",
                "node_id": "fake",
                "name": "fake",
                "full_name": "fake",
                "private": "fake",
                "owner": {
                    "login": "fake",
                    "id": "fake",
                    "node_id": "fake",
                    "avatar_url": "fake",
                    "gravatar_id": "fake",
                    "url": "fake",
                    "html_url": "fake",
                    "followers_url": "fake",
                    "following_url": "fake",
                    "gists_url": "fake",
                    "starred_url": "fake",
                    "subscriptions_url": "fake",
                    "organizations_url": "fake",
                    "repos_url": "fake",
                    "events_url": "fake",
                    "received_events_url": "fake",
                    "type": "fake",
                    "site_admin": "fake"
                },
                "html_url": "fake",
                "description": "fake",
                "fork": "fake",
                "url": "fake",
                "forks_url": "fake",
                "keys_url": "fake",
                "collaborators_url": "fake",
                "teams_url": "fake",
                "hooks_url": "fake",
                "issue_events_url": "fake",
                "events_url": "fake",
                "assignees_url": "fake",
                "branches_url": "fake",
                "tags_url": "fake",
                "blobs_url": "fake",
                "git_tags_url": "fake",
                "git_refs_url": "fake",
                "trees_url": "fake",
                "statuses_url": "fake",
                "languages_url": "fake",
                "stargazers_url": "fake",
                "contributors_url": "fake",
                "subscribers_url": "fake",
                "subscription_url": "fake",
                "commits_url": "fake",
                "git_commits_url": "fake",
                "comments_url": "fake",
                "issue_comment_url": "fake",
                "contents_url": "fake",
                "compare_url": "fake",
                "merges_url": "fake",
                "archive_url": "fake",
                "downloads_url": "fake",
                "issues_url": "fake",
                "pulls_url": "fake",
                "milestones_url": "fake",
                "notifications_url": "fake",
                "labels_url": "fake",
                "releases_url": "fake",
                "deployments_url": "fake",
                "created_at": "fake",
                "updated_at": "fake",
                "pushed_at": "fake",
                "git_url": "fake",
                "ssh_url": "fake",
                "clone_url": "fake",
                "svn_url": "fake",
                "homepage": "fake",
                "size": "fake",
                "stargazers_count": "fake",
                "watchers_count": "fake",
                "language": "fake",
                "has_issues": "fake",
                "has_projects": "fake",
                "has_downloads": "fake",
                "has_wiki": "fake",
                "has_pages": "fake",
                "forks_count": "fake",
                "mirror_url": "fake",
                "archived": "fake",
                "disabled": "fake",
                "open_issues_count": "fake",
                "license": "fake",
                "allow_forking": "fake",
                "is_template": "fake",
                "topics": "fake",
                "visibility": "fake",
                "forks": "fake",
                "open_issues": "fake",
                "watchers": "fake",
                "default_branch": "fake"
            },
        ];
        
        return fakeResponse;
    }
}

module.exports = getAllRepositories;
