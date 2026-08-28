# create Song

Create a song from the notes of one or more musical instruments. This block is similar to the built-in create song block, but it lets you use a piano roll user interface instead of a music staff.

```sig
pianoRoll.createSong(hex`00780004080200`)
```

The Piano Roll editor lets you create songs by adding notes to a grid. It's a more advanced version of the traditional music editor that supports a few extra features:

* Songs can have any number of tracks, including tracks that share the same instrument
* Notes that are started on the same tick can have different lengths (the built-in music editor only supports notes of the same length on the same tick)
* The time signature of the song can be changed
* Each note has a velocity value that can be edited to control the volume of that note
* The range of notes for each instrument is greatly expanded

The underlying data format for songs is the same as the built-in create song block, so you can use the same functions to play songs created in either editor. However, note that opening a song created in the Piano Roll editor in the built-in music editor may cause the song to be truncated or otherwise modified, since the built-in music editor does not support all of the features of the Piano Roll editor.

### Tracks

A track in the piano roll is a sequence of notes played by a single instrument. Each track has its own instrument, and you can have multiple tracks with the same instrument. Unlike the built-in music editor, only one track is ever visible in the piano roll editor at a time.

To create, delete, or switch tracks, use the dropdown in the top left corner of the piano roll editor. To change the instrument of the current track, use the dropdown to the right of the track dropdown. The instruments in the piano roll editor are the same as the instruments in the built-in music editor, but the piano roll editor supports a wider range of notes for each instrument. You can change that range of notes by using the "Range" dropdown in the top bar.

### Velocity editor

To open the velocity editor, check the "Show Velocity Editor" checkbox in the bar above the piano roll grid. The velocity of a note is represented by a vertical bar, where the height of the bar represents the volume of the note. Click and drag a bar to change that note's volume. By default, all notes start at maximum velocity.

The velocity editor will automatically scroll when you scroll the piano roll grid. Note that all notes that start on the same tick in a track will share the same velocity. If you need to have notes with different velocities on the same tick, you can create multiple tracks for that instrument and place the notes on different tracks.


### Snapping

By default, all notes in the piano roll editor will snap to the closest 1/8th note. You can customize the snapping by using the "Snap" dropdown in the top-right of the piano roll. You can choose to snap to 1/4, 1/8, 1/16, or 1/32 notes.

### Measures, Tempo, and Time Signature

The measures, tempo, and time signature of a song can all be changed in the bottom bar of the piano roll editor. Changing the time signature may change the length of your song as the piano roll editor will always adjust to make sure a song has an integer number of measures. Time signature only adjusts the visual gridlines in the piano roll, it has not effect on the playback of the song.

## Parameters

* **buffer**: the data containing the notes played by each instrument in the song.

## Returns

* a [playable](/types/playable) object for the notes contained in **buffer**.

## Example #example

Play a song composed in the Song Editor.

```blocks
music.play(pianoRoll.createSong(hex`0078000408020200001c00010a006400f40164000004000000000000000000000000000500000430000400080001220c001000012514001800011e1c00200001222400280001252c003000012934003800012c3c004000011e03001c0001dc00690000045e010004000000000000000000000564000104000330000400080001290c001000011e1400180001251c002000012924002800011b2c003000012234003800011e3c0040000129`), music.PlaybackMode.UntilDone)
```

## See also #seealso

[tone playable](/reference/music/tone-playable),
[string playable](/reference/music/string-playable),
[melody playable](/reference/music/melody-playable),
[song editor](/reference/music/song-editor)

```package
arcade-piano-roll=github:microsoft/arcade-piano-roll
```
