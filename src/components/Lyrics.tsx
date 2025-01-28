type LyricsProps = {
    name: string;
    children: React.ReactNode;  // Type for children prop
  };

    const Lyrics: React.FC<LyricsProps> = ({ children }) => {
    return (
      <>
        <div id="lyric">{children}</div>  {/* Render the children prop passed between the tags */}
      </>
    );
  };
  
export default Lyrics;