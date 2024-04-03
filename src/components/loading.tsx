import loading_gif from "../assets/gif/ajax-loader.gif"

interface PropsType {
  fullscreen?: boolean
}

const Loading = ({ fullscreen }: PropsType) => {
  return (
    <div className={`${fullscreen ? 'h-screen w-screen absolute ' : 'w-full h-full relative py-12'} flex items-center justify-center`}>
      <img
        src={loading_gif}
        alt="ajax-loader"
        className={`${fullscreen ? 'w-12 h-12' : 'w-8 h-8'}`}
      />
    </div>
  )
}

export default Loading