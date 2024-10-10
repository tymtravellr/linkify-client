import Select from 'react-select';

const options = [
  {
    value: 'gitHub',
    label: 'GitHub'
  },
  {
    value: 'youTube',
    label: 'YouTube'
  },
  {
    value: 'twitter',
    label: 'Twitter'
  },
  {
    value: 'linkedIn',
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
          <Select
            label="Single select"
            placeholder={options[0].label}
            defaultValue={options[0].value}
            options={options}
            onChange={(e) => updateLink(item.id, 'platform', e.label)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
          <input
            type="url"
            value={item.link}
            onChange={(e) => updateLink(item.id, 'link', e.target.value)}
            placeholder="https://www.example.com/username"
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