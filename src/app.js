import Phaser from 'phaser' // global

import Play from 'scenes/Play'

import 'stylesheets'

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 980
      },
      debug: true
    }
  },
  scene: [Play],
  title: 'Project Pikachu',
  backgroundColor: '#06C6F8',
  transparent: false,
  disableContextMenu: true
}

const game = new Phaser.Game(config)
