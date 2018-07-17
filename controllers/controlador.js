'use strict'

var Accion = require('../models/modelo');
var Topmundo = require('../models/topmundo');
var Alemania = require('../models/alemania');
var Cryptoc = require('../models/crypto');
var Australia = require('../models/australia');
var Austria = require('../models/austria');
var Belgica = require('../models/belgica');
var Brasil = require('../models/brasil');
var China = require('../models/china');
var Canada = require('../models/canada');
var Espana = require('../models/espana');
var Dinamarca = require('../models/dinamarca');
var Francia = require('../models/francia');
var Holanda = require('../models/holanda');
var EEUU = require('../models/eeuu');
var Italia = require('../models/italia');
var India = require('../models/india');
var Mexico = require('../models/mexico');
var Noruega = require('../models/noruega');
var Portugal = require('../models/portugal');
var Rusia = require('../models/rusia');
var Suecia = require('../models/suecia');
var Suiza = require('../models/suiza');
var UK = require('../models/uk');
var Japon = require('../models/japon');

function prueba(req, res) {
    var nombre = req.params.nombre;

    res.status(200).send({
        data: [2, 3, 4],
        message: "Hola mundo con NodeJS y EXPRESS - " + nombre
    });
}

function getAccion(req, res) {
    var id = req.params.id;
    Accion.findById(id, function(err, accion) {
        if (err) {
            res.status(500).send({ message: 'Error al obtener accion' });
        } else {
            if (!accion) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ accion });
            }
        }
    })
}

function getAcciones(req, res) {
    Accion.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ _id: -1 });
}

function saveAcciones(req, res) {
    var accion = new Accion();
    var params = req.body;

    // Datos basicos
    accion.alto = params.alto;
    accion.stop = params.stop;
    accion.nombre = params.nombre;
    accion.ticker = params.ticker;
    accion.imagen = params.imagen;
    // idiomas espanoles
    accion.espanol = params.espanol;
    accion.catalan = params.catalan;
    accion.vasco = params.vasco;
    accion.gallego = params.gallego;
    // idiomas internacionales
    accion.ingles = params.ingles;
    accion.chino = params.chino;
    accion.arabe = params.arabe;
    accion.italiano = params.italiano;
    accion.aleman = params.aleman;
    accion.frances = params.frances;
    accion.portugues = params.portugues;
    accion.ruso = params.ruso;
    accion.hindi = params.hindi;
    accion.japones = params.japones;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function updateAcciones(req, res) {
    var Id = req.params.id;
    var update = req.body;

    Accion.findByIdAndUpdate(Id, update, (err, accionActualizada) => {
        if (err) {
            res.status(500).send({ message: 'Error al actualizar la acción' });
        } else {
            res.status(200).send({ accion: accionActualizada });
        }
    });
}

function deleteAcciones(req, res) {
    var Id = req.params.id;

    Accion.findById(Id, function(err, accion) {
        if (err) {
            res.status(500).send({ message: 'Error al borrar la acción' });
        }
        if (!accion) {
            res.status(404).send({ message: 'No hay accion' });
        } else {
            accion.remove(err => {
                if (err) {
                    res.status(500).send({ message: 'Error al borrar la acción' });
                } else {
                    res.status(200).send({ message: 'La accion se ha eliminado' });
                }
            });
        }
    });
}

// ----------------------------------------------------- CRYPTO ------

function getCrypto(req, res) {
    Cryptoc.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getCryptoR(req, res) {
    Cryptoc.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveCrypto(req, res) {
    var accion = new Cryptoc();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteCrypto(req, res, next) {

    Cryptoc.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Alemania')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- CRYPTO ------

// ----------------------------------------------------- JAPON ------

function getJapon(req, res) {
    Japon.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getJaponR(req, res) {
    Japon.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveJapon(req, res) {
    var accion = new Japon();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteJapon(req, res, next) {

    Japon.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Japon')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- JAPON ------

// ----------------------------------------------------- ALEMANIA ------

function getAlemania(req, res) {
    Alemania.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getAlemaniaR(req, res) {
    Alemania.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveAlemania(req, res) {
    var accion = new Alemania();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteAlemania(req, res, next) {

    Alemania.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Alemania')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- ESPANA ------

function getEspana(req, res) {
    Espana.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getEspanaR(req, res) {
    Espana.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveEspana(req, res) {
    var accion = new Espana();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteEspana(req, res, next) {

    Espana.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Espana')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- ITALIA ------

function getItalia(req, res) {
    Italia.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getItaliaR(req, res) {
    Italia.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveItalia(req, res) {
    var accion = new Italia();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteItalia(req, res, next) {

    Italia.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Italia')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Australia ------

function getAustralia(req, res) {
    Australia.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getAustraliaR(req, res) {
    Australia.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveAustralia(req, res) {
    var accion = new Australia();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteAustralia(req, res, next) {

    Australia.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Australia')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Austria ------

function getAustria(req, res) {
    Austria.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getAustriaR(req, res) {
    Austria.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveAustria(req, res) {
    var accion = new Austria();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteAustria(req, res, next) {

    Austria.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Austria')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Belgica ------

function getBelgica(req, res) {
    Belgica.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getBelgicaR(req, res) {
    Belgica.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveBelgica(req, res) {
    var accion = new Belgica();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteBelgica(req, res, next) {

    Belgica.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Belgica')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Brasil ------

function getBrasil(req, res) {
    Brasil.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getBrasilR(req, res) {
    Brasil.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveBrasil(req, res) {
    var accion = new Brasil();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteBrasil(req, res, next) {

    Brasil.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Brasil')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- China ------

function getChina(req, res) {
    China.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getChinaR(req, res) {
    China.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveChina(req, res) {
    var accion = new China();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteChina(req, res, next) {

    China.remove({}, function(err) {
        if (err) {
            console.log('error al borrar China')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Canada ------

function getCanada(req, res) {
    Canada.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getCanadaR(req, res) {
    Canada.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveCanada(req, res) {
    var accion = new Canada();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteCanada(req, res, next) {

    Canada.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Canada')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Dinamarca ------

function getDinamarca(req, res) {
    Dinamarca.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getDinamarcaR(req, res) {
    Dinamarca.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveDinamarca(req, res) {
    var accion = new Dinamarca();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteDinamarca(req, res, next) {

    Dinamarca.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Dinamarca')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- EEUU ------

function getEEUU(req, res) {
    EEUU.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getEEUUR(req, res) {
    EEUU.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveEEUU(req, res) {
    var accion = new EEUU();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteEEUU(req, res, next) {

    EEUU.remove({}, function(err) {
        if (err) {
            console.log('error al borrar EEUU')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Francia ------

function getFrancia(req, res) {
    Francia.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getFranciaR(req, res) {
    Francia.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveFrancia(req, res) {
    var accion = new Francia();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteFrancia(req, res, next) {

    Francia.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Francia')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Holanda ------

function getHolanda(req, res) {
    Holanda.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getHolandaR(req, res) {
    Holanda.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveHolanda(req, res) {
    var accion = new Holanda();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteHolanda(req, res, next) {

    Holanda.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Holanda')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- India ------

function getIndia(req, res) {
    India.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getIndiaR(req, res) {
    India.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveIndia(req, res) {
    var accion = new India();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteIndia(req, res, next) {

    India.remove({}, function(err) {
        if (err) {
            console.log('error al borrar India')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Mexico ------

function getMexico(req, res) {
    Mexico.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getMexicoR(req, res) {
    Mexico.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveMexico(req, res) {
    var accion = new Mexico();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteMexico(req, res, next) {

    Mexico.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Mexico')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Noruega ------

function getNoruega(req, res) {
    Noruega.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getNoruegaR(req, res) {
    Noruega.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveNoruega(req, res) {
    var accion = new Noruega();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteNoruega(req, res, next) {

    Noruega.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Noruega')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Portugal ------

function getPortugal(req, res) {
    Portugal.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getPortugalR(req, res) {
    Portugal.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function savePortugal(req, res) {
    var accion = new Portugal();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deletePortugal(req, res, next) {

    Portugal.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Portugal')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Rusia ------

function getRusia(req, res) {
    Rusia.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getRusiaR(req, res) {
    Rusia.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveRusia(req, res) {
    var accion = new Rusia();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteRusia(req, res, next) {

    Rusia.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Rusia')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Suecia ------

function getSuecia(req, res) {
    Suecia.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getSueciaR(req, res) {
    Suecia.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveSuecia(req, res) {
    var accion = new Suecia();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteSuecia(req, res, next) {

    Suecia.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Suecia')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Suiza ------

function getSuiza(req, res) {
    Suiza.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getSuizaR(req, res) {
    Suiza.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveSuiza(req, res) {
    var accion = new Suiza();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteSuiza(req, res, next) {

    Suiza.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Suiza')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- Uk ------

function getUK(req, res) {
    UK.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function getUKR(req, res) {
    UK.find({ 'col0': req.params.ticker }, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    })
}

function saveUK(req, res) {
    var accion = new UK();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteUK(req, res, next) {

    UK.remove({}, function(err) {
        if (err) {
            console.log('error al borrar UK')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

// ----------------------------------------------------- TOPMUNDO ------

function getTopmundo(req, res) {
    Topmundo.find({}, (err, acciones) => {
        if (err) {
            res.status(500).send({ message: 'Error al obtener acciones' });
        } else {
            if (!acciones) {
                res.status(404).send({ message: 'No hay acciones' });
            } else {
                res.status(200).send({ acciones });
            }
        }
    }).sort({ col5: -1 }).limit(100);
}

function saveTopmundo(req, res) {
    var accion = new Topmundo();
    var params = req.body;

    accion.col1 = params.nombre;
    accion.col0 = params.ticker;
    accion.col2 = params.valor;
    accion.col3 = params.icono;
    accion.col6 = params.anual;
    accion.col5 = params.semestral;
    accion.col4 = params.mensual;

    accion.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'Error al guardar la acción' });
        } else {
            res.status(200).send({ accion: favoritoStored });
        }
    });
}

function deleteTopmundo(req, res, next) {

    Topmundo.remove({}, function(err) {
        if (err) {
            console.log('error al borrar Topmundo')
        } else {
            res.end('EXITO AL BORRAR');
        }
    });
}

module.exports = {
    prueba,
    getAccion,
    getAcciones,
    saveAcciones,
    updateAcciones,
    deleteAcciones,
    getAlemania,
    getAlemaniaR,
    saveAlemania,
    deleteAlemania,
    getCrypto,
    getCryptoR,
    saveCrypto,
    deleteCrypto,
    getAustralia,
    getAustraliaR,
    saveAustralia,
    deleteAustralia,
    getAustria,
    getAustriaR,
    saveAustria,
    deleteAustria,
    getBelgica,
    getBelgicaR,
    saveBelgica,
    deleteBelgica,
    getBrasil,
    getBrasilR,
    saveBrasil,
    deleteBrasil,
    getJapon,
    getJaponR,
    saveJapon,
    deleteJapon,
    getCanada,
    getCanadaR,
    saveCanada,
    deleteCanada,
    getChina,
    getChinaR,
    saveChina,
    deleteChina,
    getEspana,
    getEspanaR,
    saveEspana,
    deleteEspana,
    getDinamarca,
    getDinamarcaR,
    saveDinamarca,
    deleteDinamarca,
    getEEUU,
    getEEUUR,
    saveEEUU,
    deleteEEUU,
    getFrancia,
    getFranciaR,
    saveFrancia,
    deleteFrancia,
    getHolanda,
    getHolandaR,
    saveHolanda,
    deleteHolanda,
    getIndia,
    getIndiaR,
    saveIndia,
    deleteIndia,
    getItalia,
    getItaliaR,
    saveItalia,
    deleteItalia,
    getMexico,
    getMexicoR,
    saveMexico,
    deleteMexico,
    getNoruega,
    getNoruegaR,
    saveNoruega,
    deleteNoruega,
    getPortugal,
    getPortugalR,
    savePortugal,
    deletePortugal,
    getRusia,
    getRusiaR,
    saveRusia,
    deleteRusia,
    getSuecia,
    getSueciaR,
    saveSuecia,
    deleteSuecia,
    getSuiza,
    getSuizaR,
    saveSuiza,
    deleteSuiza,
    getUK,
    getUKR,
    saveUK,
    deleteUK,
    getTopmundo,
    saveTopmundo,
    deleteTopmundo

}