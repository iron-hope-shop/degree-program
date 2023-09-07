from espnet2.bin.tts_inference import Text2Speech
from scipy.io.wavfile import write

model = Text2Speech.from_pretrained(
    model_file="espnet/english_male_ryanspeech_fastspeech2",
    vocoder_file="path_to_vocoder/train_nodev_parallel_wavegan.v1.long/checkpoint-1000000steps.pkl"
)

output = model("This is a simple test.")

write("x.wav", 22050, output['wav'].numpy())