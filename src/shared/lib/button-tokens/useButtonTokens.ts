import designSystem from '~/shared/config/design-system.json'

export type ButtonVariant = 'light' | 'dark'

export function useButtonTokens() {
  const tokens = designSystem.components.button

  const button = (variant: ButtonVariant) => tokens[variant]

  return { button }
}
