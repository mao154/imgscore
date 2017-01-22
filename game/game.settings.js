/**
 * # Game settings for Images Scoring game.
 * Copyright(c) 2017 Stefano Balietti
 * MIT Licensed
 *
 * http://www.nodegame.org
 * ---
 */
module.exports = {

    // Session Counter start from (not used).
    SESSION_ID: 100,

    // Number of sets of pictures to rate per player.
    NSETS: 5,

    // Number of images per set.
    NIMAGES: 20,

    // Number of images per set.
    SKIPSETS: true,

    // Serve sets of images sequentally from set X (it is zero-indexed).
    SET_COUNTER: -1,

    // The name of the folder in public/ containing the images.
    // Keep the trailing slash.
    IMG_DIR: 'imgscore/',

    // Payment settings.

    // Divider ECU / DOLLARS *
    BONUS: 1,

    EXCHANGE_RATE: 1
};
