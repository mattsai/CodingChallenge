from moviepy.editor import VideoFileClip

video_input_path = r""
video_input_path = r"C:\Users\narmer\Videos\needConvert\code1.mp4"

video_output_path = 'video_output4.mp4'

# load the bideo into the video file clip oh oh 
video = VideoFileClip(video_input_path)

video.write_videofile(video_output_path, codec='libx264', audio_codec='aac')

print(f'Output path : {video_output_path}')
