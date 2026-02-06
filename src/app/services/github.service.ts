import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface GithubRelease {
  tag_name: string;
}

export interface GithubIssue {
  title: string;
  html_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly http = inject(HttpClient);
  readonly githubApi = 'https://api.github.com';

  fetchReleases(owner: string, repo: string): Observable<GithubRelease[]> {
    return this.http.get<GithubRelease[]>(`${this.githubApi}/repos/${owner}/${repo}/releases`);
  }

  fetchIssues(keyword: string): Observable<GithubIssue[]> {
    return this.http
      .get<{
        items: GithubIssue[];
      }>(`${this.githubApi}/search/issues?q=is:issue repo:NG-ZORRO/ng-zorro-antd ${keyword}&per_page=5`)
      .pipe(map(res => res.items || []));
  }
}
