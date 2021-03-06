var g_poofs = [],
    g_poofIndex = 0,
    MAX_POOFS = 1;
var g_trail, g_trailParameters;
//火焰
function setupFlame(particleSystem) {

    var emitter = particleSystem.createParticleEmitter();
    emitter.setTranslation(0, 0, 0);
    emitter.setState(THREE.AdditiveBlending);
    emitter.setColorRamp(
        [
            1, 1, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 1,
            1, 0, 0, 0.5,
            0, 0, 0, 0
        ]
    );
    emitter.setParameters({
        numParticles: 20,
        lifeTime: 2,
        timeRange: 2,
        startSize: 0.5,
        endSize: 0.9,
        velocity: [0, 0.60, 0],
        velocityRange: [0.15, 0.15, 0.15],
        worldAcceleration: [0, -0.2, 0],
        spinSpeedRange: 4
    });
    emitter.name = "Flame";
    scene.add(emitter);
}

function setupNaturalGasFlame(particleSystem) {

    var emitter = particleSystem.createParticleEmitter();
    emitter.setTranslation(-2, 0, 0);
    emitter.setState(THREE.AdditiveBlending);
    emitter.setColorRamp(
        [
            0.2, 0.2, 1, 1,
            0, 0, 1, 1,
            0, 0, 1, 0.5,
            0, 0, 1, 0
        ]
    );
    emitter.setParameters({
        numParticles: 20,
        lifeTime: 2,
        timeRange: 2,
        startSize: 0.5,
        endSize: 0.2,
        velocity: [0, 0.60, 0],
        worldAcceleration: [0, -0.20, 0],
        spinSpeedRange: 4
    });
    emitter.name = "NaturalGasFlame";
    scene.add(emitter);

}
//烟
function setupSmoke(particleSystem) {

    var emitter = particleSystem.createParticleEmitter();
    emitter.setTranslation(-1, 0, 0);
    emitter.setState(THREE.NormalBlending);
    emitter.setColorRamp(
        [
            0, 0, 0, 1,
            0, 0, 0, 0,
        ]
    );
    emitter.setParameters({
        numParticles: 20,
        lifeTime: 2,
        timeRange: 2,
        startSize: 1,
        endSize: 3,
        velocity: [0, 2, 0],
        velocityRange: [0.2, 0, 0.2],
        worldAcceleration: [0, -0.1, 0],
        spinSpeedRange: 2
    });
    emitter.name = "Smoke";
    scene.add(emitter);

}

function setupWhiteEnergy(particleSystem) {

    var emitter = particleSystem.createParticleEmitter();
    emitter.setTranslation(0, 0, 0);
    emitter.setState(THREE.AdditiveBlending);
    emitter.setColorRamp(
        [
            1, 1, 1, 1,
            1, 1, 1, .5,
            1, 1, 1, 0
        ]
    );
    emitter.setParameters({
        numParticles: 50,
        lifeTime: 2,
        timeRange: 2,
        startSize: 1,
        endSize: 1,
        positionRange: [1, 0, 1],
        velocityRange: [0.20, 0, 0.20]
    });
    emitter.name = "WhiteEnergy";
    scene.add(emitter);

}

function setupRipples(particleSystem) {

    var texture = new THREE.TextureLoader().load('textures/ripple.png');
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    var emitter = particleSystem.createParticleEmitter(texture);
    emitter.setTranslation(-2, 0, 3);
    emitter.setState(THREE.NormalBlending);
    emitter.setColorRamp(
        [
            0.7, 0.8, 1, 1,
            1, 1, 1, 0
        ]
    );
    emitter.setParameters({
        numParticles: 20,
        lifeTime: 2,
        timeRange: 2,
        startSize: 0.5,
        endSize: 2,
        positionRange: [1, 0, 1],
        billboard: false
    });
    emitter.name = "Ripples";
    scene.add(emitter);

}

function setupText(particleSystem) {

    var image = [
        'X.....X..XXXXXX..XXXXX....XXXX...X....',
        'X.....X..X.......X....X..X.......X....',
        'X..X..X..XXXXX...XXXXX...X..XXX..X....',
        'X..X..X..X.......X....X..X....X..X....',
        '.XX.XX...XXXXXX..XXXXX....XXXX...XXXXX'
    ];

    var height = image.length;
    var width = image[0].length;

    // Make an array of positions based on the text image.
    var positions = [];
    for (var yy = 0; yy < height; ++yy) {

        for (var xx = 0; xx < width; ++xx) {

            if (image[yy].substring(xx, xx + 1) == 'X') {

                positions.push([(xx - width * 0.5) * 0.10,
                    -(yy - height * 0.5) * 0.10
                ]);

            }

        }

    }
    var emitter = particleSystem.createParticleEmitter();
    emitter.setTranslation(2, 2, 0);
    emitter.setState(THREE.AdditiveBlending);
    emitter.setColorRamp(
        [
            1, 0, 0, 1,
            0, 1, 0, 1,
            0, 0, 1, 1,
            1, 1, 0, 0
        ]
    );
    emitter.setParameters({
            numParticles: positions.length * 4,
            lifeTime: 2,
            timeRange: 2,
            startSize: 0.25,
            endSize: 0.5,
            positionRange: [0.02, 0, 0.02],
            velocity: [0.01, 0, 0.01]
        },
        function (particleIndex, parameters) {

            var index = Math.floor(Math.random() * positions.length);
            index = Math.min(index, positions.length - 1);
            parameters.position[0] = positions[index][0];
            parameters.position[1] = positions[index][1];

        });
    emitter.name = "Text";
    scene.add(emitter);

}
//雨
function setupRain(particleSystem) {

    // var emitter = particleSystem.createParticleEmitter();
    var emitter = particleSystem.createParticleEmitter(new THREE.TextureLoader().load(
        'textures/rain.png'));
    emitter.setTranslation(0, 2, 0);
    emitter.setState(THREE.NormalBlending);
    emitter.setColorRamp(
        [
            0.2, 0.2, 1, 0,
            0.2, 0.2, 1, .5,
            0.2, 0.2, 1, 1,
            0.2, 0.2, 1, .5,
            0.2, 0.2, 1, 0
        ]
    );
    emitter.setParameters({
        numParticles: 1000,
        lifeTime: 2,
        timeRange: 2,
        startSize: 0.05,
        endSize: 0.05,
        positionRange: [10, 10, 10],
        velocity: [0, -5, 0]
    });
    emitter.name = "Rain";
    scene.add(emitter);

}
//雪
function setupSnow(particleSystem) {

    // var emitter = particleSystem.createParticleEmitter();
    var emitter = particleSystem.createParticleEmitter(new THREE.TextureLoader().load(
        'textures/snow.png'));
    emitter.setTranslation(2, 2, 2);
    emitter.setState(THREE.NormalBlending);
    emitter.setColorRamp(
        [
            1, 1, 1, 0,
            1, 1, 1, .5,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, .5,
            1, 1, 1, 0
        ]
    );
    emitter.setParameters({
        numParticles: 800,
        lifeTime: 2,
        timeRange: 2,
        startSize: 0.05,
        endSize: 0.05,
        positionRange: [5, 5, 5],
        velocity: [0, -0.8, 0]
    });
    emitter.name = "Snow";
    scene.add(emitter);

}

function setupAnim(particleSystem) {

    var emitter = particleSystem.createParticleEmitter(new THREE.TextureLoader().load(
        'textures/particle-anim.png'));
    emitter.setTranslation(3, 0, 0);
    emitter.setColorRamp(
        [
            1, 1, 1, 1,
            1, 1, 1, 1,
            1, 1, 1, 0
        ]
    );
    emitter.setParameters({
        numParticles: 20,
        numFrames: 8,
        frameDuration: 0.25,
        frameStartRange: 8,
        lifeTime: 2,
        timeRange: 2,
        startSize: 0.5,
        endSize: 0.9,
        positionRange: [0.1, 0.1, 0.1],
        velocity: [0, 2, 0],
        velocityRange: [0.75, 0.15, 0.75],
        acceleration: [0, -1.5, 0],
        spinSpeedRange: 1
    });
    emitter.name = "Anim";
    scene.add(emitter);

}

function setupBall(particleSystem) {

    var texture = new THREE.TextureLoader().load('textures/ripple.png');
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;

    var emitter = particleSystem.createParticleEmitter(texture);
    emitter.setTranslation(-4, 0, -2);
    emitter.setState(THREE.NormalBlending);
    emitter.setColorRamp(
        [
            1, 1, 1, 1,
            1, 1, 1, 0
        ]
    );
    emitter.setParameters({
            numParticles: 300,
            lifeTime: 2,
            timeRange: 2,
            startSize: 0.1,
            endSize: 0.5,
            colorMult: [1, 1, 0.5, 1],
            colorMultRange: [0, 0, 0.5, 0],
            billboard: false
        },
        function (particleIndex, parameters) {

            var matrix = new THREE.Matrix4();
            var matrix2 = new THREE.Matrix4();

            matrix.makeRotationY(Math.random() * Math.PI * 2);
            matrix2.makeRotationX(Math.random() * Math.PI);
            matrix.multiply(matrix2);
            var position = new THREE.Vector3(0, 1, 0);
            position.transformDirection(matrix);

            parameters.position = [position.x, position.y, position.z];
            var q = new THREE.Quaternion();
            q.setFromRotationMatrix(matrix);
            parameters.orientation = [q.x, q.y, q.z, q.w];

        });
    emitter.name = "Ball";
    scene.add(emitter);

}


function setupCube(particleSystem) {

    var texture = new THREE.TextureLoader().load('textures/ripple.png');
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    texture.magFilter = THREE.LinearFilter;

    var emitter = particleSystem.createParticleEmitter(texture);
    emitter.setTranslation(2, 0, -3);
    emitter.setState(THREE.AdditiveBlending);
    emitter.setColorRamp(
        [
            1, 1, 1, 1,
            0, 0, 1, 1,
            1, 1, 1, 0
        ]
    );
    emitter.setParameters({
            numParticles: 300,
            lifeTime: 2,
            timeRange: 2,
            startSize: 0.1,
            endSize: 0.5,
            colorMult: [0.8, 0.9, 1, 1],
            billboard: false
        },
        function (particleIndex, parameters) {

            var matrix = new THREE.Matrix4();
            var matrix2 = new THREE.Matrix4();

            matrix.makeRotationY(Math.floor(Math.random() * 4) * Math.PI * 0.5);
            matrix2.makeRotationX(Math.floor(Math.random() * 3) * Math.PI * 0.5);
            matrix.multiply(matrix2);

            var q = new THREE.Quaternion();
            q.setFromRotationMatrix(matrix);
            parameters.orientation = [q.x, q.y, q.z, q.w];

            var position = new THREE.Vector3(Math.random() * 2 - 1, 1, Math.random() * 2 - 1);
            var len = position.length();
            position.transformDirection(matrix);
            parameters.position = [position.x * len, position.y * len, position.z * len];

        });
    emitter.name = "Cube";
    scene.add(emitter);

}

function setupPoof(particleSystem) {

    var emitter = particleSystem.createParticleEmitter();
    emitter.setState(THREE.AdditiveBlending);
    emitter.setColorRamp(
        [
            1, 1, 1, 0.3,
            1, 1, 1, 0
        ]
    );
    emitter.setParameters({
            numParticles: 30,
            lifeTime: 1.5,
            startTime: 0,
            startSize: 0.50,
            endSize: 2,
            spinSpeedRange: 10,
            billboard: true
        },
        function (index, parameters) {

            var matrix = new THREE.Matrix4();
            var angle = Math.random() * 2 * Math.PI;
            matrix.makeRotationY(angle);
            var position = new THREE.Vector3(3, 0, 0);
            var len = position.length();
            position.transformDirection(matrix);
            parameters.velocity = [position.x * len, position.y * len, position.z * len];
            var acc = new THREE.Vector3(-0.3, 0, -0.3).multiply(position);
            parameters.acceleration = [acc.x, acc.y, acc.z];

        });

    // make 3 poofs one shots
    for (var ii = 0; ii < MAX_POOFS; ++ii) {

        g_poofs[ii] = emitter.createOneShot();

    }

}

function triggerPoof() {

    // We have multiple poofs because if you only have one and it is still going
    // when you trigger it a second time it will immediately start over.

    g_poofs[g_poofIndex].trigger([1 + g_poofIndex, 0, 3]);

    g_poofIndex++;

    if (g_poofIndex == MAX_POOFS) {

        g_poofIndex = 0;

    }

}

function setupTrail(particleSystem) {

    g_trailParameters = {
        numParticles: 2,
        lifeTime: 2,
        startSize: 0.1,
        endSize: 0.9,
        velocityRange: [0.20, 0.20, 0.20],
        spinSpeedRange: 0.04,
        billboard: true
    };

    g_trail = particleSystem.createTrail(
        1000,
        g_trailParameters);

    g_trail.setState(THREE.AdditiveBlending);

    g_trail.setColorRamp(
        [
            1, 0, 0, 1,
            1, 1, 0, 1,
            1, 1, 1, 0
        ]
    );

}

function leaveTrail() {

    var trailClock = (new Date().getTime() / 1000.0) * -0.8;
    g_trail.birthParticles(
        [Math.sin(trailClock) * 4, 2, Math.cos(trailClock) * 4]);

}