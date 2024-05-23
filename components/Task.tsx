import { Check } from '@tamagui/lucide-icons'
import { Check as CheckIcon } from '@tamagui/lucide-icons'
import type { CheckboxProps, SizeTokens } from 'tamagui'
import { Checkbox, Label, XStack, YStack } from 'tamagui'

export default function TaskBtn() {
  return (
    <YStack width={350} alignItems="center" space="$2" borderWidth={'$1'} borderColor={'$pink10'} p={'$2.5'} borderRadius={'$2'}>
      <CheckboxWithLabel size="$7" />
    </YStack>
  )
}

export function CheckboxWithLabel({
  size,
  label = 'Teste TESTE teste',
  ...checkboxProps
}: CheckboxProps & { size: SizeTokens; label?: string }) {
  const id = `checkbox-${size.toString().slice(1)}`
  return (
    <XStack width={300} alignItems="center" space="$4" >
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label fontSize={'$5'} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  )
}

