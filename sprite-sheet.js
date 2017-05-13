
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'animation', { preload: preload, create: create });

function preload() {

    //  Original Item
    //  37x45 is the size of each frame

    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.spritesheet('mummy', 'assets/metalslug_mummy37x45.png', 37, 45, 18);

    //  Nnew Item
    //  frame size = 32x32; 13 frames in sheet
    game.load.spritesheet('bouncing-heart', 'assets/bouncing-heart_32x32.png', 32, 32, 13);
}

function create() {

    //  Original Item
    // placed on-screen at 600, 450
    var mummy = game.add.sprite(600, 450, 'mummy');

    //  Here we add a new animation called 'walk'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
    var walk = mummy.animations.add('walk');

    //  And this starts the animation playing by using its key ("walk")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    mummy.animations.play('walk', 30, true);
    
    //  New Item
    //  position = 100, 100; fps = 12
    var heart = game.add.sprite(100, 100, 'bouncing-heart');
    var bounce = heart.animations.add('bounce');
    heart.animations.play('bounce', 12, true);
}
