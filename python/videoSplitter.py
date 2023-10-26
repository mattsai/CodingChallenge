from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip

video_path = "./video_output4.mp4"

video_duration = 250 

num_parts = 2

part_duration = video_duration // num_parts

output_paths = []

for i in range(num_parts):
    start_time = i * part_duration
    end_time = (i + 1) * part_duration
    output_path = f"part: {i + 1}.mp4"
    ffmpeg_extract_subclip(video_path, start_time, end_time, targetname=output_path)
    output_paths.append(output_path)

for path in output_paths:
    print(f"Part: {path}")
