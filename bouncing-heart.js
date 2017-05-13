
var game = new Phaser.Game(400, 300, Phaser.CANVAS, 'bouncing-heart', { preload: preload, create: create });

function preload() {

    //  32x32 is the size of each frame

    //  There are 13 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in case there are 
    //  blank frames at the end, we need to tell the loader how many to load

    game.load.spritesheet('bouncing-heart', 'assets/bouncing-heart_32x32.png', 32, 32, 13);

}

function create() {

    // center on screen = screen_center 200x150 - 1/2 w, h
    var mummy = game.add.sprite(184, 98, 'bouncing-heart');

    //  Here we add a new animation called 'bounce'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames 
    //  in the 'bouncing-heart' sprite sheet
    var walk = mummy.animations.add('bounce');

    //  And this starts the animation playing by using its key ("bounce")
    //  12 is the frame rate (30fps)
    //  true means it will loop when it finishes
    mummy.animations.play('bounce', 12, true);

}
