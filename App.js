import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const video = React.useRef(null);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={{backgroundColor:"#1B1B1E", height:'100%'}}>
      <View style={{marginTop:250, backgroundColor:"#1B1B1E"}}>
      <YoutubePlayer
        ref={video}
        height={300}
        play={playing}
        videoId={"liJVSwOiiwg"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  
})