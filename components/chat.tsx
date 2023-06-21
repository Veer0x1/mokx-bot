"use client"
import { useChat, type Message } from 'ai/react'
import { ChatPanel } from '@/components/chat-panel'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'


export interface ChatProps extends React.ComponentProps<'div'> {
    initialMessages?: Message[]
    id?: string
  }
  

export function Chat({ id, initialMessages, className }: ChatProps) {
    const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
        'ai-token',
        null
      )
    const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id,
        previewToken
      }
    })
  return (
    <>
      {/* <div className={cn("pb-[200px] pt-4 md:pt-10", className)}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div> */}

      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </>
  )
}
