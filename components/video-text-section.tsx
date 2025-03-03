interface VideoTextSectionProps {
  videoUrl: string
  title: string
  text: string
  doctorName?: string
  videoOnLeft?: boolean
}

export default function VideoTextSection({
  videoUrl,
  title,
  text,
  doctorName,
  videoOnLeft = true,
}: VideoTextSectionProps) {
  return (
    <section id="tecnicas" className="py-16 md:py-24 bg-[#04384E] text-white">
      <div className="container px-4 md:px-6">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${videoOnLeft ? "" : "md:grid-flow-dense"}`}>
          <div className={`${videoOnLeft ? "md:order-1" : "md:order-2"}`}>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src={videoUrl}
                className="w-full h-full"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={`${videoOnLeft ? "md:order-2" : "md:order-1"}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FD753D]">{title}</h2>
            <p className="text-white mb-6">{text}</p>
            <p className="text-lg font-medium text-[#FD753D]">Assista ao vídeo!</p>
            {doctorName && <p className="text-[#FD753D] font-semibold mt-4">{doctorName}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

