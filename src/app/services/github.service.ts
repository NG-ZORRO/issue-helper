import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GithubService {
  githubApi = 'https://api.github.com';

  constructor(private http: HttpClient) {
  }

  fetchReleases(owner: string, repo: string) {
    return this.http.get(`${this.githubApi}/repos/${owner}/${repo}/releases`);
  }

  fetchIssues(keyword: string) {
    return this.http.get(`${this.githubApi}/search/issues?q=is:issue repo:NG-ZORRO/ng-zorro-antd ${keyword}&per_page=5`);
  }

}
