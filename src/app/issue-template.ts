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

