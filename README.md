# Monty Hall problem 

## Introduction
The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall.

>Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

https://en.wikipedia.org/wiki/Monty_Hall_problem

## Usage
This is a simple CLI program, written in node.js, that calculates the likelihood of winning a car by always choose to switch door.

```sh
$ node montyHall.js [iterations]
```
Default number of iterations is 1000.

#### Example restult

```
$ node montyHall.js
Iterations      : 1000
Percent of car  : 66.30 %
Percent of goat : 33.70 %
```