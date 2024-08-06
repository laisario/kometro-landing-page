import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const YoutubePlayer = ({ id, title, autoplay = false, ...others }) => {
  const autoplayParam = autoplay ? 1 : 0;
  const params = `autoplay=${autoplayParam}`;
  return <LiteYouTubeEmbed id={id} title={title} params={params} {...others} />;
};

export default YoutubePlayer;
