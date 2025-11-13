# AI Response Component - Token Mapping

## Figma Variables → JSON Token Mapping

### Base Variables (from Figma MCP)
- `--surface/card` → `surfaceCard`
- `--border/weak` → `borderWeak`
- `--text/primary` → `textPrimary`
- `--reference/helper` → `referenceHelper`
- `--icon/primary` → `iconPrimary`

### Component-Specific Tokens

#### Avatar (MotoAiAvatar)
- Background: `surfaceCanvas` ✅ (fixed - was incorrectly using `surfaceOnCanvas`)
- Border: `borderWeak` ✅

#### Chat Bubble (AiChatBubble)
- Background: `surfaceCard` ✅
- Border: `borderWeak` ✅
- Text: `textPrimary` ✅

#### Timestamp
- Text: `referenceHelper` ✅

#### Action Buttons (Regenerate, Pin, Overflow)
- Background (rest): `surfaceCard` ✅
- Border: `borderWeak` ✅
- Background (hover): `surfaceIconButtonSecondaryHover` ✅ (exists in JSON)
- Background (press): `surfaceIconButtonSecondaryPress` ✅ (exists in JSON)
- Icon (rest): `iconIconButtonSecondary` ✅ (exists in JSON)
- Icon (hover): `iconIconButtonSecondaryHover` ✅ (exists in JSON)
- Icon (press): `iconIconButtonSecondaryPressed` ✅ (exists in JSON)

#### Feedback Buttons (Thumbs Up/Down)
- Container background: `surfaceCard` ✅
- Container border: `borderWeak` ✅
- Button background (rest): `surfaceCard` ✅
- Button background (hover): `surfaceItemHover` ✅ (exists in JSON)
- Button background (press/selected): `surfaceItemSelected` ✅ (exists in JSON)
- Icon: `iconPrimary` ✅
- Button padding: 6px vertical, 8px horizontal (matches Figma `py-[6px] px-[8px]`)
- Button size: 32px × 24px ✅

#### "Give feedback" Button
- Background (enabled): `surfaceCard` ✅
- Background (disabled): `referenceSurfaceDisabled` ✅ (exists in JSON)
- Text color (enabled): `textPrimary` ✅
- Text color (disabled): `surfaceDisabled` ✅ (exists in JSON)
- Font: Segoe UI Semibold, 12px, line-height 16px ✅
- Padding: 6px vertical, 12px horizontal (matches Figma `py-[6px] px-[12px]`)
- Divider: `borderWeak` token, 1px width, 23px height ✅

## Verification Status

### ✅ Validated Tokens (exist in JSON)
- surfaceCard
- borderWeak
- textPrimary
- referenceHelper
- iconPrimary
- surfaceIconButtonSecondaryHover
- surfaceIconButtonSecondaryPress
- iconIconButtonSecondary
- iconIconButtonSecondaryHover
- iconIconButtonSecondaryPressed
- surfaceItemHover
- surfaceItemSelected

### ✅ All Tokens Validated
- All tokens exist in JSON file
- `surfaceOnCanvas` → Fixed to use `surfaceCanvas` ✅

## Next Steps
1. ✅ Phase 1 Complete - All tokens validated
2. Proceed with Phase 2.1 - Build MotoAiAvatar component

