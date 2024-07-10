# Custom Icons
- svg file을 svgs 폴더에 넣고 `pnpm --filter @repo/icons build:icons` 명령어 실행

## SVG 파일 주의사항
- stroke가 필요 없는 svg는 항상 stroke-width="0"을 추가한다.
- fill 혹은 stroke는 최상단의 svg에 currentColor로 설정하고, 하위 엘레먼츠에는 추가하지 않는다.
- 아이콘의 크기는 중요하지 않지만 최대한 하나의 사이즈로 통일하면 좋을 것 같다. 예: w:20px, h:20px 혹은 w:24px h:24px
- 확인 결과 아이콘이 정사각형이 아니여도 가운데 정렬된 상태로 아이콘이 표시되는 것을 확인했다.
- 우리가 참고한 Lucide Icon의 경우에는 [Icon Design Principles](https://lucide.dev/guide/design/icon-design-guide)을 제공하는데 24*24에 여백 최소 1px을 기준으로 하고 있다.
- 디자인 시스템 - 아이콘의 퀄리티를 위해 디자인 팀과 위 내용이 공유되어 동일한 기준을 가지고 있다면 좋을 것 같다. (꼭 lucide 아이콘에 맞추자는 것이 아니라, 우리만의 기준을 가지는 것이 중요하다.)
- icons 폴더의 경우 빈 폴더만을 가지고 있도록 하고, install시에 빌드를 하도록 한다. svg가 삭제되어도 icons폴더에 생성된 아이콘은 삭제되지 않기 때문이다. 마찬 가지의 이유로 alias와 dynamic import 파일도 gitignore에 추가했다.
- postinstall script로 icon을 생성하도록 수정했다. 추후에 husky를 도입시에 잊지 말고 작업해주어야 한다.

## 사용 방법
사용하고자 하는 프로젝트의 package.json의 dependency에
```json
{
    "@shared/icons": "workspace:*",
}
```
을 추가 한 뒤

```tsx
import { ChevronDown } from "@shared/icons";


<ChevronDown
    className="text-imqa-text-gray cursor-pointer"
    size={17}
    onClick={toggleCollapse}
/>

```
와 같이 사용한다. Lucide Icon을 참고하여 만든 패키지인만큼 사용법이 Lucide Icon과 비슷하다.