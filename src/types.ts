import Phaser = require("phaser");

export type Game                = Phaser.Game;
export type GameConfig          = Phaser.Types.Core.GameConfig;

export type Scene               = Phaser.Scene;

export type Shape               = Phaser.GameObjects.Shape;
export type Arc                 = Phaser.GameObjects.Arc;
export type Rectangle           = Phaser.GameObjects.Rectangle;
export type Text                = Phaser.GameObjects.Text;

export type PhysicsBody         = Phaser.Physics.Arcade.Body;
export type PhysicsStaticBody   = Phaser.Physics.Arcade.StaticBody;

export type CursorKeys          = Phaser.Types.Input.Keyboard.CursorKeys;

export type Vector2             = Phaser.Math.Vector2;
export type Vector3             = Phaser.Math.Vector3;
export type Vector4             = Phaser.Math.Vector4;