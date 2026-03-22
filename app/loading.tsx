export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-12">
        <div className="mb-10">
          <div className="h-2.5 w-20 rounded skeleton mb-3"/>
          <div className="h-9 w-56 rounded-xl skeleton"/>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {Array.from({length:10}).map((_,i)=>(
            <div key={i} className="rounded-2xl overflow-hidden bg-white shadow-[0_2px_14px_rgba(26,10,8,0.07)]">
              <div className="skeleton" style={{aspectRatio:'3/4'}}/>
              <div className="p-4 space-y-2">
                <div className="h-3 w-3/4 rounded skeleton"/>
                <div className="h-3 w-1/2 rounded skeleton"/>
                <div className="h-4 w-1/3 rounded mt-2 skeleton"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
