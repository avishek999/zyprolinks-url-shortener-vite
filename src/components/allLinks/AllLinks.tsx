"use client"


import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { QRCodeSVG } from 'qrcode.react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '../ui/input'
import {  LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Link {
  id: string
  title: string
  url: string
}

const links: Link[] = [
  { id: '1', title: 'My Portfolio', url: 'https://myportfolio.com' },
  { id: '2', title: 'GitHub Profile', url: 'https://github.com/myusername' },
  { id: '3', title: 'LinkedIn', url: 'https://linkedin.com/in/myprofile' },
  { id: '4', title: 'Twitter', url: 'https://twitter.com/myhandle' },
  { id: '5', title: 'Blog', url: 'https://myblog.com' },
]

const AllLinks = () => {
  return (
    <Card className='w-full max-w-3xl mx-auto'>
      <CardHeader className='space-y-4'>
     
        <CardTitle className="text-2xl font-bold flex items-center gap-3">Create a new Link  <LinkIcon className='text-muted-foreground' /> </CardTitle>

        <Input />
        <CardTitle className="text-2xl font-bold">All Links</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full pr-4">
          {links.map((link) => (
            <div key={link.id} className="flex items-center justify-between mb-6 last:mb-0">
              <div className="flex-grow mr-4">
                <h3 className="text-lg font-semibold mb-1">{link.title}</h3>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-blue-400 hover:underline"
                >
                  {link.url}
                </a>
              </div>
              <div className="flex-shrink-0">
                <QRCodeSVG 
                  value={link.url} 
                  size={80} 
                  bgColor={"#ffffff"} 
                  fgColor={"#000000"} 
                  level={"L"} 
                  includeMargin={false}
                />
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

export default AllLinks
