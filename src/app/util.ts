// 匹配预定复现网址
// tslint:disable-next-line:max-line-length
export const REP_LINK_REGEXP = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]*(stackblitz|github|codesandbox)[-A-Za-z0-9+&@#/%?=~_|!:,.;]+/;
// 现有网址不可完全复制
export const PREVENT_COPY_LINK = /^(https?:\/\/)?((stackblitz\.com\/edit\/ng-zorro-antd-ivy)|(ng-zorro-antd-ivy\.stackblitz\.io)|(codesandbox.io\/s\/ng-zorro-antd-ivy-mp18k))\/?$/i;

export function getBugTemplate(bugFormValue: any) {
  const { link, step, expect_result, exist_result, version, environment, addtion } = bugFormValue;
  return `
### Reproduction link
[${link}](${link})

### Steps to reproduce
${step}

### What is expected?
${expect_result}

### What is actually happening?
${exist_result}

| Environment | Info |
|---|---|
| ng-zorro-antd | ${version} |
| Browser | ${environment} |

${addtion ? `---\n${addtion}` : ''}`;
}

export function getFeatureTemplate(featFormValue: any) {
  const { motivation, proposal } = featFormValue;
  return `
## What problem does this feature solve?
${motivation}

## What does the proposed API look like?
${proposal}`;
}

