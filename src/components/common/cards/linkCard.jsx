import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const options = [
  {
    value: 'github',
    label: 'GitHub'
  },
  {
    value: 'youtube',
    label: 'YouTube'
  },
  {
    value: 'twitter',
    label: 'Twitter'
  },
  {
    value: 'linkedin',
    label: 'LinkedIn'
  },
  {
    value: 'instagram',
    label: 'Instagram'
  },
  {
    value: 'facebook',
    label: 'Facebook'
  },
  {
    value: 'website',
    label: 'Website'
  }
]

const LinkCard = ({
  index,
  item,
  updateLink,
  removeLink,
}) => {
console.log('item', item)
  return (
    <div key={index} className="bg-slate-100 p-6 rounded-lg mb-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-1">
            <span className="h-[2px] w-4 bg-gray-500"></span>
            <span className="h-[2px] w-4 bg-gray-500"></span>
          </div>
          <h2 className="text-lg font-semibold">Link #{index + 1}</h2>
        </div>
        <button className="text-gray-500" onClick={() => removeLink(item.id)}>Remove</button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
          <Select onValueChange={(value) => updateLink(item.id, 'platform', value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={item.platform || 'Github'} />
            </SelectTrigger>
            <SelectContent>
              {
                options.map((option, index) => (
                  <SelectItem key={index} value={option.value}>{option.label}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
          <Input
            type="url"
            value={item.link}
            onChange={(e) => updateLink(item.id, 'link', e.target.value)}
            placeholder="https://www.example.com"
          />
          {
            !item.valid && (
              <p className="text-red-500 text-sm mt-1">Please enter a valid link</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default LinkCard