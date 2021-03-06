import React from 'react'
import { Info, ChevronDown } from 'react-feather'

import { Button } from '../src/Button'

import styles from '../src/Button.module.scss'
import storyStyles from './Button.stories.module.scss'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = () => <Button kind="primary">Primary</Button>

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/8mVm6LTbp2Z0RaWWjTZoft/%F0%9F%90%9DHIVE?node-id=880%3A4409',
  },
}

export const PrimaryHovered = () => (
  <Button className={styles.hover} kind="primary">
    Primary
  </Button>
)

PrimaryHovered.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/8mVm6LTbp2Z0RaWWjTZoft/%F0%9F%90%9DHIVE?node-id=1491%3A261',
  },
}

export const PrimaryFocused = () => (
  <Button className={styles.focus} kind="primary">
    Primary
  </Button>
)

PrimaryFocused.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/8mVm6LTbp2Z0RaWWjTZoft/%F0%9F%90%9DHIVE?node-id=1491%3A278',
  },
}

export const PrimaryActive = () => (
  <Button className={styles.active} kind="primary">
    Primary
  </Button>
)

PrimaryActive.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/8mVm6LTbp2Z0RaWWjTZoft/%F0%9F%90%9DHIVE?node-id=1491%3A278',
  },
}

export const PrimaryDisabled = () => (
  <Button disabled disabledTooltip="Disabled tooltip" kind="primary">
    Primary
  </Button>
)

PrimaryDisabled.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/8mVm6LTbp2Z0RaWWjTZoft/%F0%9F%90%9DHIVE?node-id=1491%3A315',
  },
}

export const PrimaryDisabledTooltip = () => (
  <Button disabled disabledTooltip="Disabled tooltip" disabledTooltipVisible kind="primary">
    Primary
  </Button>
)

export const PrimaryIconLeft = () => (
  <Button kind="primary" iconLeft={Info} iconLeftAriaLabel="Info icon">
    Primary
  </Button>
)

export const PrimaryIconRight = () => (
  <Button kind="primary" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Primary
  </Button>
)

export const PrimaryIconBoth = () => (
  <Button kind="primary" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Primary
  </Button>
)

export const PrimaryIconBothHovered = () => (
  <Button
    className={styles.hover}
    kind="primary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Primary
  </Button>
)

export const PrimaryIconBothFocused = () => (
  <Button
    className={styles.focus}
    kind="primary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Primary
  </Button>
)

export const PrimaryIconBothActive = () => (
  <Button
    className={styles.active}
    kind="primary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Primary
  </Button>
)

export const PrimaryLoading = () => (
  <Button kind="primary" loading>
    Primary
  </Button>
)

export const PrimaryIconBothLoading = () => (
  <Button kind="primary" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon" loading>
    Primary
  </Button>
)

export const Secondary = () => <Button kind="secondary">Secondary</Button>

Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/8mVm6LTbp2Z0RaWWjTZoft/%F0%9F%90%9DHIVE?node-id=944%3A7',
  },
}

export const SecondaryHovered = () => (
  <Button className={styles.hover} kind="secondary">
    Secondary
  </Button>
)

export const SecondaryFocused = () => (
  <Button className={styles.focus} kind="secondary">
    Secondary
  </Button>
)

export const SecondaryActive = () => (
  <Button className={styles.active} kind="secondary">
    Secondary
  </Button>
)

export const SecondaryDisabled = () => (
  <Button disabled disabledTooltip="Disabled tooltip" kind="secondary">
    Secondary
  </Button>
)

export const SecondaryDisabledTooltip = () => (
  <Button disabled disabledTooltip="Disabled tooltip" disabledTooltipVisible kind="secondary">
    Secondary
  </Button>
)

export const SecondaryIconLeft = () => (
  <Button kind="secondary" iconLeft={Info} iconLeftAriaLabel="Info icon">
    Secondary
  </Button>
)

export const SecondaryIconRight = () => (
  <Button kind="secondary" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Secondary
  </Button>
)

export const SecondaryIconBoth = () => (
  <Button kind="secondary" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Secondary
  </Button>
)

export const SecondaryIconBothHovered = () => (
  <Button
    className={styles.hover}
    kind="secondary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Secondary
  </Button>
)

export const SecondaryIconBothFocused = () => (
  <Button
    className={styles.focus}
    kind="secondary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Secondary
  </Button>
)

export const SecondaryIconBothActive = () => (
  <Button
    className={styles.active}
    kind="secondary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Secondary
  </Button>
)

export const SecondaryLoading = () => (
  <Button kind="secondary" loading>
    Secondary
  </Button>
)

export const SecondaryIconBothLoading = () => (
  <Button kind="secondary" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon" loading>
    Secondary
  </Button>
)

export const Danger = () => <Button kind="danger">Danger</Button>

export const DangerHover = () => (
  <Button className={styles.hover} kind="danger">
    Danger
  </Button>
)

export const DangerFocused = () => (
  <Button className={styles.focus} kind="danger">
    Danger
  </Button>
)

export const DangerActive = () => (
  <Button className={styles.active} kind="danger">
    Danger
  </Button>
)

export const DangerDisabled = () => (
  <Button disabled disabledTooltip="Disabled tooltip" kind="danger">
    Danger
  </Button>
)

export const DangerDisabledTooltip = () => (
  <Button disabled disabledTooltip="Disabled tooltip" disabledTooltipVisible kind="danger">
    Danger
  </Button>
)

export const DangerIconLeft = () => (
  <Button kind="danger" iconLeft={Info} iconLeftAriaLabel="Info icon">
    Danger
  </Button>
)

export const DangerIconRight = () => (
  <Button kind="danger" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Danger
  </Button>
)

export const DangerIconBoth = () => (
  <Button kind="danger" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Danger
  </Button>
)

export const DangerIconBothHovered = () => (
  <Button
    className={styles.hover}
    kind="danger"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Danger
  </Button>
)

export const DangerIconBothFocused = () => (
  <Button
    className={styles.focus}
    kind="danger"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Danger
  </Button>
)

export const DangerIconBothActive = () => (
  <Button
    className={styles.active}
    kind="danger"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Danger
  </Button>
)

export const DangerLoading = () => (
  <Button kind="danger" loading>
    Danger
  </Button>
)

export const DangerIconBothLoading = () => (
  <Button kind="danger" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon" loading>
    Danger
  </Button>
)

export const Transparent = () => <Button kind="transparent">Transparent</Button>

export const TransparentHovered = () => (
  <Button className={styles.hover} kind="transparent">
    Transparent
  </Button>
)

export const TransparentFocused = () => (
  <Button className={styles.focus} kind="transparent">
    Transparent
  </Button>
)

export const TransparentActive = () => (
  <Button className={styles.active} kind="transparent">
    Transparent
  </Button>
)

export const TransparentDisabled = () => (
  <Button disabled disabledTooltip="Disabled tooltip" kind="transparent">
    Transparent
  </Button>
)

export const TransparentIconLeft = () => (
  <Button kind="transparent" iconLeft={Info} iconLeftAriaLabel="Info icon">
    Transparent
  </Button>
)

export const TransparentIconRight = () => (
  <Button kind="transparent" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Transparent
  </Button>
)

export const TransparentIconBoth = () => (
  <Button kind="transparent" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Transparent
  </Button>
)

export const TransparentIconBothHovered = () => (
  <Button
    className={styles.hover}
    kind="transparent"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Transparent
  </Button>
)

export const TransparentIconBothFocused = () => (
  <Button
    className={styles.focus}
    kind="transparent"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Transparent
  </Button>
)

export const TransparentIconBothActive = () => (
  <Button
    className={styles.active}
    kind="transparent"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Transparent
  </Button>
)

export const TransparentLoading = () => (
  <Button kind="transparent" loading>
    Transparent
  </Button>
)

export const TransparentIconBothLoading = () => (
  <Button
    kind="transparent"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
    loading
  >
    Transparent
  </Button>
)

export const Long = () => (
  <Button kind="primary" iconLeft={Info} iconLeftAriaLabel="Info icon" iconRight={ChevronDown} iconRightAriaLabel="Chevron icon">
    Looooooooooooooooooooooooooooooooong Primary Button
  </Button>
)

export const LongDisabled = () => (
  <Button
    kind="primary"
    disabled={true}
    disabledTooltip={'Disabled'}
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Looooooooooooooooooooooooooooooooong Primary Button
  </Button>
)

export const LongDisabledWithDisabledTooltipVisibleFalse = () => (
  <Button
    kind="primary"
    disabled={true}
    disabledTooltip={'Disabled'}
    disabledTooltipVisible={false}
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Looooooooooooooooooooooooooooooooong Primary Button
  </Button>
)

export const LongCentered = () => (
  <Button
    kind="primary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
    className={storyStyles.long}
  >
    Centered
  </Button>
)

export const NotCapitalized = () => (
  <Button
    capitalize={false}
    kind="primary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
  >
    Not capitalized
  </Button>
)

export const LinkSemanticsPrimary = () => (
  <Button kind="primary" component="a" href="#">
    Primary
  </Button>
)

export const LinkSemanticsNotCapitalizedWithIcons = () => (
  <Button
    capitalize={false}
    kind="primary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
    component="a"
    href="#"
  >
    Not capitalized
  </Button>
)

export const LinkSemanticsLong = () => (
  <Button
    kind="primary"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
    component="a"
    href="#"
  >
    Looooooooooooooooooooooooooooooooong Primary Button
  </Button>
)

export const LinkSemanticsTransparentIconBothFocused = () => (
  <Button
    className={styles.focus}
    kind="transparent"
    iconLeft={Info}
    iconLeftAriaLabel="Info icon"
    iconRight={ChevronDown}
    iconRightAriaLabel="Chevron icon"
    component="a"
    href="#"
    rel="noopener"
    target="_blank"
  >
    Transparent
  </Button>
)
