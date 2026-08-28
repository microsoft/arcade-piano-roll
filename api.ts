//% color="#E30FC0"
//% block="Piano Roll"
//% icon="\uf001"
namespace pianoRoll {
    //% blockId=arcade_piano_roll_create_song
    //% block="piano roll $song"
    //% song.fieldEditor=pianoroll
    //% song.fieldOptions.decompileLiterals=true
    //% song.fieldOptions.taggedTemplate="hex;assets.song"
    //% song.fieldOptions.decompileIndirectFixedInstances="true"
    //% song.fieldOptions.decompileArgumentAsString="true"
    //% song.fieldOptions.showTimeSignature="true"
    //% song.fieldOptions.showSnapControls="true"
    //% song.snippet="hex`00780004080100`"
    //% song.pySnippet='hex("""00780004080100""")'
    //% toolboxParent=music_playable_play
    //% toolboxParentArgument=toPlay
    //% duplicateShadowOnDrag
    //% help=github:arcade-piano-roll/docs/create-song
    export function createSong(song: Buffer): music.Playable {
        return new music.sequencer.Song(song);
    }
}