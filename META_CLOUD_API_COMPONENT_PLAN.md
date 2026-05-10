# Meta Cloud API Based Component Plan

## Purpose

`whatsapp-ui`는 WhatsApp 스타일 디자인시스템 컴포넌트 모음이고, `meta-cloud-api`는 WhatsApp Cloud API SDK다. 이 문서는 SDK가 다루는 메시지/웹훅 타입을 기준으로 UI 컴포넌트에 부족한 표현 범위를 정리하고, 구현 순서를 단계별로 잡는다.

목표는 API 호출 로직을 컴포넌트 안에 넣는 게 아니라, Cloud API에서 자연스럽게 나오는 메시지 형태를 디자인시스템 레벨에서 표현할 수 있게 만드는 것이다.

## Source References

- UI repo: `components/ui/whatsapp/*`
- UI registry: `registry.json`, `public/r/*`
- SDK message send types: `../froggy1014/meta-cloud-api/src/api/messages/types/*`
- SDK webhook message types: `../froggy1014/meta-cloud-api/src/core/webhook/types/message.ts`
- SDK webhook helpers: `../froggy1014/meta-cloud-api/src/core/webhook/utils/messageHelpers.ts`
- SDK status types: `../froggy1014/meta-cloud-api/src/core/webhook/types/status.ts`

## Design System Boundaries

컴포넌트가 가져야 할 책임:

- WhatsApp Cloud API의 주요 메시지 타입을 시각적으로 표현한다.
- `variant`, `timestamp`, `status`, `context`, `actions` 같은 UI 상태를 props로 받는다.
- 버튼, 링크, 다운로드, 지도 열기 같은 동작은 `onClick`/`href`/slot으로 위임한다.
- Storybook과 shadcn registry에서 바로 재사용 가능한 단위로 제공한다.

컴포넌트가 가지면 안 되는 책임:

- `meta-cloud-api`를 직접 import하지 않는다.
- API 요청, media download, webhook parsing, token 관리 같은 서버 로직을 포함하지 않는다.
- 특정 비즈니스 플로우에 고정된 문구나 payload shape을 강제하지 않는다.

## Current Coverage

이미 있는 컴포넌트:

| API/UI 영역 | 현재 컴포넌트 | 상태 |
| --- | --- | --- |
| Text message | `ChatBubble` | 기본 지원 |
| Image/video media | `ImageBubble` | 기본 지원 |
| Audio/voice | `VoiceMessageBubble` | 기본 지원 |
| Document/file | `FileAttachmentBubble` | 기본 지원 |
| Template message | `TemplateBubble` | 기본 지원 |
| Carousel template | `CarouselTemplate` | 기본 지원 |
| Reaction display | `ReactionPill`, `MessageBubble` | 부분 지원 |
| Typing indicator | `TypingIndicator` | 지원 |
| Read receipts | 여러 bubble 내부 | 지원하지만 중복 많음 |
| Call permission | `CallPermissionBubble` | 지원 |

부족한 영역:

| SDK 타입 | 필요한 UI | 이유 |
| --- | --- | --- |
| `location` | `LocationBubble` | 일반 위치 공유 메시지가 없음 |
| `contacts` | `ContactBubble`, `ContactsBubble` | 연락처 공유는 독립 카드 UI가 필요 |
| `sticker` | `StickerBubble` | image와 다른 크기/배경/animated 상태가 필요 |
| `interactive.button` | `InteractiveButtonBubble` | 세션형 reply button 메시지 표현 필요 |
| `interactive.list` | `ListMessageBubble` | 목록 선택 메시지 표현 필요 |
| `interactive.cta_url` | `CtaUrlBubble` | 단일 CTA URL 메시지 표현 필요 |
| `interactive.location_request_message` | `LocationRequestBubble` | 위치 요청 메시지 표현 필요 |
| `interactive.address_message` | `AddressMessageBubble` | 주소 입력 요청 메시지 표현 필요 |
| `interactive.flow` | `FlowBubble` | Flow CTA 메시지 표현 필요 |
| `order` | `OrderBubble` | catalog/order webhook 표현 필요 |
| `system` | `SystemMessageBubble` | 번호 변경 등 시스템 메시지 표현 필요 |
| `unsupported` | `UnsupportedMessageBubble` | 알 수 없는 메시지 fallback 필요 |
| `context`, `referral` | `ReplyPreview`, `ForwardedLabel`, `ReferralPreview` | 답장/전달/광고 유입 정보 표시 필요 |
| `status.failed` | status icon 확장 | webhook status에는 `failed`가 있음 |

## Implementation Principles

- 먼저 작은 presentational component를 만든다.
- 공통 bubble frame, timestamp, status icon은 중복 제거 대상이다.
- SDK 타입과 이름은 참고하되 props는 UI 친화적으로 설계한다.
- 각 컴포넌트는 Storybook story와 registry entry를 같이 추가한다.
- `public/r/*.json`은 `pnpm registry:build`로 생성한다.
- 컴포넌트마다 최소 3개 상태를 story로 둔다: 기본, outgoing/incoming, edge case.

## Phase 0: Shared Primitives

목표: 새 컴포넌트를 늘리기 전에 중복되는 UI 요소를 정리한다.

작업:

- `MessageStatus`에 `failed` 추가
  - 현재: `sending | sent | delivered | read`
  - 변경: `sending | sent | delivered | read | failed`
- `MessageStatusIcon` 또는 `StatusIndicator` 공통화
  - 현재 `ChatBubble`, `ImageBubble`, `FileAttachmentBubble`, `VoiceMessageBubble`에 유사 SVG가 반복됨
- `BubbleMeta` 추가
  - `timestamp`, `status`, `overlay` 여부를 공통 처리
- `BubbleFrame` 검토
  - incoming/outgoing 정렬, tail, bubble background, max width를 공통화할 수 있는지 확인
  - 단, media bubble처럼 구조가 다른 경우까지 억지로 묶지는 않음

산출물:

- `components/ui/whatsapp/message-status.tsx`
- 선택: `components/ui/whatsapp/bubble-meta.tsx`
- 기존 bubble의 status 처리 최소 정리
- Storybook regression 확인

## Phase 1: Core Missing Message Types

목표: SDK의 기본 메시지 타입 중 현재 UI에서 빠진 것부터 채운다.

### 1. LocationBubble

파일:

- `components/ui/whatsapp/location-bubble.tsx`
- `stories/whatsapp/LocationBubble.stories.tsx`

예상 props:

```ts
interface LocationBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  name?: string;
  address?: string;
  latitude: number;
  longitude: number;
  mapImageUrl?: string;
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
  onOpenMap?: () => void;
}
```

상태:

- 이미지 있는 지도 preview
- 이미지 없는 fallback map placeholder
- 이름/주소 없는 raw coordinate
- outgoing read/failed status

### 2. ContactBubble / ContactsBubble

파일:

- `components/ui/whatsapp/contact-bubble.tsx`
- `stories/whatsapp/ContactBubble.stories.tsx`

예상 props:

```ts
interface ContactItem {
  name: string;
  phones?: string[];
  emails?: string[];
  company?: string;
  avatar?: string;
}

interface ContactBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  contacts: ContactItem[];
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
  onMessageContact?: (contact: ContactItem) => void;
  onAddContact?: (contact: ContactItem) => void;
}
```

상태:

- 단일 연락처
- 여러 연락처 collapsed/stacked
- 회사/이메일 포함
- 액션 없는 readonly

### 3. StickerBubble

파일:

- `components/ui/whatsapp/sticker-bubble.tsx`
- `stories/whatsapp/StickerBubble.stories.tsx`

예상 props:

```ts
interface StickerBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  src: string;
  alt?: string;
  animated?: boolean;
  timestamp?: string;
  status?: MessageStatus;
  showTail?: boolean;
}
```

상태:

- static sticker
- animated sticker indicator
- failed outgoing status

### 4. SystemMessageBubble

파일:

- `components/ui/whatsapp/system-message-bubble.tsx`
- `stories/whatsapp/SystemMessageBubble.stories.tsx`

예상 props:

```ts
interface SystemMessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  timestamp?: string;
  icon?: React.ReactNode;
}
```

상태:

- 번호 변경 안내
- encryption/system notice
- 긴 텍스트 wrapping

## Phase 2: Context And Fallback UI

목표: 메시지 자체보다 대화 맥락을 보여주는 공통 컴포넌트를 추가한다.

### ReplyPreview

용도:

- 답장 메시지 위에 원본 메시지 preview를 표시한다.
- `context.id`만 있는 경우에도 placeholder 상태를 표현할 수 있게 한다.

예상 props:

```ts
interface ReplyPreviewProps {
  author?: string;
  body?: string;
  mediaType?: "text" | "image" | "video" | "audio" | "document" | "sticker" | "location" | "contact";
  accentColor?: string;
  onClick?: () => void;
}
```

### ForwardedLabel

용도:

- forwarded/frequently_forwarded context 표시.

예상 props:

```ts
interface ForwardedLabelProps {
  frequently?: boolean;
}
```

### ReferralPreview

용도:

- Click-to-WhatsApp ad referral 표시.
- source headline/body/media thumbnail을 보여준다.

예상 props:

```ts
interface ReferralPreviewProps {
  headline?: string;
  body?: string;
  sourceUrl?: string;
  mediaType?: "image" | "video";
  imageUrl?: string;
  thumbnailUrl?: string;
  onOpen?: () => void;
}
```

### UnsupportedMessageBubble

용도:

- SDK webhook의 `unsupported` 또는 unknown message fallback.
- 개발자/운영자가 오류를 식별할 수 있게 optional error title 정도만 노출한다.

예상 props:

```ts
interface UnsupportedMessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  title?: string;
  description?: string;
  timestamp?: string;
}
```

## Phase 3: Interactive Session Messages

목표: template이 아닌 interactive message UI를 별도 컴포넌트로 지원한다.

### InteractiveButtonBubble

SDK 대응:

- `interactive.type = "button"`
- 최대 3개 reply button

예상 props:

```ts
interface InteractiveButton {
  id?: string;
  title: string;
  disabled?: boolean;
}

interface InteractiveButtonBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  header?: React.ReactNode;
  body: string;
  footer?: string;
  buttons: InteractiveButton[];
  timestamp?: string;
  onButtonClick?: (button: InteractiveButton) => void;
}
```

### ListMessageBubble

SDK 대응:

- `interactive.type = "list"`
- sections/rows

예상 props:

```ts
interface ListRow {
  id?: string;
  title: string;
  description?: string;
}

interface ListSection {
  title?: string;
  rows: ListRow[];
}

interface ListMessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  body: string;
  footer?: string;
  buttonLabel: string;
  sections: ListSection[];
  timestamp?: string;
  onRowSelect?: (row: ListRow) => void;
}
```

UI 방식:

- bubble 안에는 CTA row만 표시
- 클릭 시 bottom sheet 또는 popover로 sections 표시
- Base UI `Dialog` 또는 `Drawer` 사용 검토

### CtaUrlBubble

SDK 대응:

- `interactive.type = "cta_url"`

예상 props:

```ts
interface CtaUrlBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  body?: string;
  footer?: string;
  displayText: string;
  url?: string;
  timestamp?: string;
}
```

### FlowBubble

SDK 대응:

- `interactive.type = "flow"`

예상 props:

```ts
interface FlowBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  body: string;
  footer?: string;
  cta: string;
  mode?: "draft" | "published";
  timestamp?: string;
  onOpenFlow?: () => void;
}
```

### LocationRequestBubble

SDK 대응:

- `interactive.type = "location_request_message"`

예상 props:

```ts
interface LocationRequestBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  body: string;
  footer?: string;
  timestamp?: string;
  onSendLocation?: () => void;
}
```

### AddressMessageBubble

SDK 대응:

- `interactive.type = "address_message"`

예상 props:

```ts
interface AddressMessageBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  body: string;
  footer?: string;
  country?: string;
  timestamp?: string;
  onOpenAddressForm?: () => void;
}
```

## Phase 4: Commerce And Order UI

목표: catalog/product/order 흐름을 표현한다.

### ProductCard

용도:

- product interactive, product list, carousel product card, order item에서 재사용.

예상 props:

```ts
interface ProductCardProps {
  title: string;
  subtitle?: string;
  price?: string;
  imageUrl?: string;
  retailerId?: string;
  onClick?: () => void;
}
```

### ProductListBubble

SDK 대응:

- `interactive.type = "product_list"`

구성:

- body/footer
- section별 product row
- catalog CTA

### OrderBubble

SDK 대응:

- webhook `order`

예상 props:

```ts
interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  currency: string;
  title?: string;
  imageUrl?: string;
}

interface OrderBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "incoming" | "outgoing";
  catalogId: string;
  text?: string;
  items: OrderItem[];
  timestamp?: string;
  onViewOrder?: () => void;
}
```

## Phase 5: Optional Adapter Examples

목표: 디자인시스템 컴포넌트를 SDK payload와 연결하는 예시를 제공하되, core component에는 SDK 의존성을 넣지 않는다.

선택 파일:

- `components/ui/whatsapp/message-renderer.tsx`
- `stories/whatsapp/MessageRenderer.stories.tsx`

방향:

- `WhatsAppMessageRenderer`는 optional example 성격.
- `meta-cloud-api` 타입을 직접 import하지 않고, compatible한 최소 local type을 둔다.
- 실제 앱에서는 사용자가 SDK type adapter를 자기 프로젝트에서 구현하도록 유도한다.

예상 형태:

```ts
type RenderableWhatsAppMessage =
  | { type: "text"; text: { body: string } }
  | { type: "image"; image: { url?: string; caption?: string } }
  | { type: "location"; location: { latitude: number; longitude: number; name?: string; address?: string } }
  | { type: "contacts"; contacts: ContactItem[] }
  | { type: "sticker"; sticker: { url: string; animated?: boolean } };
```

## Registry And Storybook Work

새 컴포넌트마다 반복 작업:

1. `components/ui/whatsapp/<component>.tsx` 추가
2. `stories/whatsapp/<Component>.stories.tsx` 추가
3. `registry.json` item 추가
4. `pnpm registry:build` 실행
5. `public/r/<component>.json` 생성 확인
6. `pnpm lint` 실행
7. 필요하면 `pnpm storybook`으로 시각 확인

## Suggested Implementation Order

1. Phase 0: `MessageStatus`/status icon 공통화
2. Phase 1-1: `LocationBubble`
3. Phase 1-2: `ContactBubble`
4. Phase 1-3: `StickerBubble`
5. Phase 1-4: `SystemMessageBubble`
6. Phase 2: `ReplyPreview`, `ForwardedLabel`, `ReferralPreview`, `UnsupportedMessageBubble`
7. Phase 3-1: `InteractiveButtonBubble`
8. Phase 3-2: `ListMessageBubble`
9. Phase 3-3: `CtaUrlBubble`, `FlowBubble`, `LocationRequestBubble`, `AddressMessageBubble`
10. Phase 4: `ProductCard`, `ProductListBubble`, `OrderBubble`
11. Phase 5: optional `MessageRenderer` example

## Acceptance Criteria

각 컴포넌트는 아래 조건을 만족해야 한다.

- incoming/outgoing 또는 해당되는 방향 상태를 표현한다.
- timestamp/status가 긴 텍스트나 작은 viewport에서 겹치지 않는다.
- props는 API payload 그대로가 아니라 UI 친화적이다.
- action은 callback/slot으로 제공하고 API 호출은 하지 않는다.
- Storybook에서 기본/edge state를 확인할 수 있다.
- registry build 결과가 생성된다.
- `pnpm lint`가 통과한다.

## Risks And Notes

- 너무 많은 API 타입을 한 컴포넌트에 넣으면 디자인시스템이 SDK wrapper처럼 변한다. 타입별로 작은 컴포넌트를 유지한다.
- `BubbleFrame` 공통화는 좋지만, media/template/interactive는 구조가 달라서 과한 추상화가 될 수 있다.
- `MessageRenderer`는 편하지만 public API로 고정하면 유지보수 부담이 크다. 처음에는 story/example 수준이 낫다.
- Meta Cloud API는 변경이 잦으니 공식 SDK 타입과 문서를 주기적으로 대조해야 한다.

