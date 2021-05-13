/**
 * Use the star field effect to simulate snow for lowering the temperature variable
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Girl.setImage(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f d 5 5 5 5 5 5 d f . . 
        . f d 5 5 5 5 5 5 5 5 d f . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        f b 5 5 5 5 5 5 5 5 5 5 b f 
        f b 5 5 5 5 5 5 5 5 5 5 b f 
        f b b 5 5 5 5 5 5 5 5 b b f 
        f b b b d 5 5 5 5 d b b b f 
        f b b b b b b b b b b b b f 
        f f b b b b b b b b b b f . 
        . c c b b b b b b b b c c . 
        . 4 d c f f f f f f c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 b f f . . 
        . . . . f f b b f f . . . . 
        `)
})
/**
 * Change the direction of the sprite when the arrow keys are pressed
 */
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Girl.setImage(img`
        . . . f f f c c c . . . . . 
        . f f 5 5 5 5 5 5 f f . . . 
        . f 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 5 5 c . 
        f 5 5 b d 5 5 5 5 5 5 5 c . 
        f 5 d 4 4 b 5 5 5 5 5 5 5 f 
        f 5 b 4 4 4 c c 5 5 5 5 5 f 
        f f f 4 4 c b c b 5 5 5 b f 
        . f f d d c 1 e b b b b b c 
        . . f d d d d 4 f b b b b c 
        . . f 4 4 4 e e e 4 b b c . 
        . . f 9 9 9 e d d 4 f f . . 
        . . f 9 9 9 e d d e f . . . 
        . f 3 3 b 3 b e e b f . . . 
        . f f 3 b 3 b 3 b f f . . . 
        . . . f f b b f f . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Girl.setImage(img`
        . . . . . . . . . . . . . . 
        . . . . . c c c f f f . . . 
        . . . f f 5 5 5 5 5 5 f f . 
        . . f 5 5 5 5 5 5 5 5 5 f . 
        . c 5 5 5 5 5 5 5 5 5 5 5 f 
        c 5 5 5 5 5 5 5 5 d b 5 5 f 
        f 5 5 5 5 5 5 5 b 4 4 d 5 f 
        f 5 5 5 5 5 c c 4 4 4 b 5 f 
        f b 5 5 5 b c b c 4 4 f f . 
        c b b b b b e 1 c d d f . . 
        c b b b b e e d d d d c . . 
        . c b b 4 d d e 4 4 4 c . . 
        . . c c e d d e 9 9 9 c . . 
        . . c b b e e b b b b b c . 
        . . . c b 3 3 3 b 3 b 3 c . 
        . . . . c c c b b c c c . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Girl.setImage(img`
        . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        c b 5 5 5 d b b d 5 5 5 b c 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b e 1 f d d f 1 e b b f 
        c f b f d d d d d 4 4 b f c 
        . c e c 6 9 9 9 4 d d d c . 
        . e 4 c 9 9 9 9 4 d d 4 c . 
        . e c b b 3 b b b e e c . . 
        . . c c 3 3 b 3 b 3 c c . . 
        . . . . c b b c c c . . . . 
        `)
})
let Girl: Sprite = null
Girl = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Girl)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(Girl)
effects.starField.startScreenEffect()
let Soldier = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Soldier.x = 50
Soldier.y = 50
Soldier.follow(Girl)
game.onUpdate(function () {
	
})
forever(function () {
    Soldier.setVelocity(1, 1)
})
