# Importing necessary libraries
from __future__ import print_function
import numpy as np
from keras.datasets import mnist
from keras.models import Sequential
from keras.layers.core import Dense, Activation
from keras.optimizers import SGD
from keras.utils import np_utils

# Setting a seed for reproducibility
np.random.seed(1671)

# Setting hyperparameters
NB_EPOCH = 20 # number of iterations over the entire training dataset
BATCH_SIZE = 128 # number of samples per gradient update
VERBOSE = 1 # verbosity mode, 1 = progress bar
NB_CLASSES = 10 # number of output classes, in this case, digits 0-9
OPTIMIZER = SGD() # stochastic gradient descent optimizer
N_HIDDEN = 128 # number of neurons in the hidden layer
VALIDATION_SPLIT=0.2 # how much of the training dataset is used for validation
RESHAPED = 784 # 28x28 pixels reshaped into a 784 vector

# Loading the MNIST dataset from keras
(X_train, y_train), (X_test, y_test) = mnist.load_data()

# Preprocessing the data
X_train = X_train.reshape(60000,RESHAPED) # reshaping the training data for neural network
X_test = X_test.reshape(10000,RESHAPED) # reshaping the test data for neural network
X_train = X_train.astype("float32") # converting training data to float32 type
X_test = X_test.astype("float32") # converting test data to float32 type

# Normalizing the data so that pixel values are between 0 and 1
X_train /= 255 
X_test /= 255 

# Displaying the number of training and test samples
print(X_train.shape[0], "Train Samples")
print(X_test.shape[0], "Test Samples")

# Converting class vectors to binary class matrices
Y_train = np_utils.to_categorical(y_train, NB_CLASSES)
Y_test = np_utils.to_categorical(y_test, NB_CLASSES)

# Building the model
model = Sequential()
model.add(Dense(N_HIDDEN, input_shape=(RESHAPED,))) # adding the first hidden layer
model.add(Activation("relu")) # applying the ReLU activation function
model.add(Dense(N_HIDDEN)) # adding the second hidden layer
model.add(Activation("relu")) # applying the ReLU activation function
model.add(Dense(NB_CLASSES)) # adding the output layer
model.add(Activation("softmax")) # applying the Softmax activation function

# Printing the model summary
model.summary()

# Compiling the model
model.compile(
    loss="categorical_crossentropy", # using categorical cross entropy as the loss function
    optimizer=OPTIMIZER, # using stochastic gradient descent as the optimizer
    metrics=["accuracy"] # using accuracy as the metric
)

# Training the model
history = model.fit(
    X_train,
    Y_train,
    batch_size=BATCH_SIZE,
    epochs=NB_EPOCH,
    verbose=VERBOSE,
    validation_split=VALIDATION_SPLIT, # using a validation split
)

# Evaluating the model
score = model.evaluate(X_test, Y_test, verbose=VERBOSE)

# Printing the test score and accuracy
print(f"Test score: {score[0]}")
print(f"Test accuracy: {score[1]}")
