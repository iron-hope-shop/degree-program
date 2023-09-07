from keras.datasets import cifar10
from keras.utils import np_utils
from keras.models import Sequential
from keras.layers import Dense, Dropout, Activation, Flatten, Conv2D, MaxPooling2D
from keras.optimizers import SGD, Adam, RMSprop
import matplotlib.pyplot as plt

# CIFAR_10 is a set of 60k images 32x32px on 3 channels
IMG_CHANNELS = 3
IMG_ROWS = 32
IMG_COLS = 32

BATCH_SIZE = 128
NB_EPOCH = 20
NB_CLASSES = 10
VERBOSE = 1
VALIDATION_SPLIT = 0.2
OPTIM = RMSprop()

(X_train, y_train), (X_test, y_test) = cifar10.load_data()
print(f"X_train shape: {X_train.shape}")
print(f"{X_train.shape[0]} train samples")
print(f"{X_test.shape[0]} test samples")

Y_train = np_utils.to_categorical(y_train, NB_CLASSES)
Y_test = np_utils.to_categorical(y_test, NB_CLASSES)

X_train = X_train.astype("float32")
X_test = X_test.astype("float32")
X_train /= 255
X_test /= 255

model = Sequential()
model.add(Conv2D(32, (3, 3), padding="same",input_shape=(IMG_ROWS, IMG_COLS, IMG_CHANNELS)))
model.add(Activation("relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))
model.add(Flatten())
model.add(Dense(512))
model.add(Activation("relu"))
model.add(Dropout(0.5))
model.add(Dense(NB_CLASSES))
model.add(Activation("softmax"))
model.summary()

model.compile(loss="categorical_crossentropy", optimizer=OPTIM,metrics=["accuracy"])
model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=NB_EPOCH, validation_split=VALIDATION_SPLIT, verbose=VERBOSE)
score = model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE, verbose=VERBOSE)
print(f"Test score: {score[0]}")
print(f"Test accuracy: {score[1]}")

model_json = model.to_json()
open("cifar10_architecture.json", "w").write(model_json)
model.save_weights("cifar10_weights.h5", overwrite=True)

model = Sequential()
model.add(Conv2D(32, (3, 3), padding="same", input_shape=(IMG_ROWS, IMG_COLS, IMG_CHANNELS)))
model.add(Activation("relu"))
model.add(Conv2D(32, (3, 3), padding="same"))
model.add(Activation("relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))
model.add(Conv2D(64, (3, 3), padding="same"))
model.add(Activation("relu"))
model.add(Conv2D(64, 3, 3))
model.add(Activation("relu"))
model.add(MaxPooling2D(pool_size=(2, 2)))
model.add(Dropout(0.25))
model.add(Flatten())
model.add(Dense(512))
model.add(Activation("relu"))
model.add(Dropout(0.50))
model.add(Dense(NB_CLASSES))
model.add(Activation("softmax"))

model.compile(loss="categorical_crossentropy", optimizer=OPTIM,metrics=["accuracy"])
model.fit(X_train, Y_train, batch_size=BATCH_SIZE, epochs=40, validation_split=VALIDATION_SPLIT, verbose=VERBOSE)
score = model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE, verbose=VERBOSE)
print(f"Deeper Network Test score: {score[0]}")
print(f"Deeper Network Test accuracy: {score[1]}")

from keras.preprocessing.image import ImageDataGenerator
import numpy as np

NUM_TO_AUGMENT = 5

(X_train, y_train), (X_test, y_test) = cifar10.load_data()

print("Augmenting training set image...")
datagen = ImageDataGenerator(
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest')

xtas, ytas = [], []
for i in range(X_train.shape[0]):
    num_aug = 0
    x = X_train[i] # (3, 32, 32)
    x = x.reshape((1,) + x.shape) # (1, 3, 32, 32)
    for x_aug in datagen.flow(x, batch_size=1, save_to_dir="./preview", save_prefix="cifar", save_format="jpeg"):
        if num_aug >= NUM_TO_AUGMENT:
            break
        xtas.append(x_aug[0])
        num_aug += 1

print(X_train.shape[0])

# STEPS_PER_EPOCH = 50000
# BATCH_SIZE = 50000
# NB_EPOCH = 50

datagen.fit(X_train)

history = model.fit_generator(
    datagen.flow(X_train, Y_train, batch_size=BATCH_SIZE),
    steps_per_epoch=X_train.shape[0] // BATCH_SIZE,
    epochs=NB_EPOCH,
    verbose=VERBOSE,
)

score = model.evaluate(X_test, Y_test, batch_size=BATCH_SIZE, verbose=VERBOSE)
print(f"Deeper network with augmented data Test score: {score[0]}")
print(f"Deeper network with augmented data Test accuracy: {score[0]}")