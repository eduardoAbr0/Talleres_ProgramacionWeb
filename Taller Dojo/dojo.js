//Agregar elemento hijo ejemplo 1
        require(['dojo/dom', 'dojo/dom-construct'], function (dom, domConstruct) {
            let greetingnode = dom.byId('greeting');
            domConstruct.place('<em> Dojo! </em>', greetingnode);
        });

        //Cambios etiqueta h3
        require([
            'dojo/dom', 'dojo/fx', 'dojo/domReady!'
        ], function (dom, fx) {
            let greeting = dom.byId('ej1');
            greeting.innerHTML += ' con Dojo!';

            fx.slideTo({//Animacion
                node: greeting,
                top: 100,
                left: 200
            }).play;
        });

        //Captura eventos
        require(['dojo/on', 'dojo/dom'], function (on, dom) {
            const boton = dom.byId('btn');
            on(boton, "click", function () {
                alert('Evento capturado.')
            });
        });

        //Ejemplo 4
        require(['dijit/form/Button', 'dojo/domReady!'], function(Button){
            new Button({
                label: 'Click aqui',
                onClick: function(){alert('Boton Dojo');}
            }, 'btn2');
        })

        //Ejemplo 5
        require([
            "dojo/request",
            "dojo/dom",
            "dojo/on",
            "dojo/dom-construct",
            "dojo/domReady!"
        ], function(request, dom, on, domConstruct){
            const boton = dom.byId("btn-cargar");
            const resultado = dom.byId("resultado");

            on(boton, "click", function(){
                resultado.innerHTML = "<em>Cargando datos </em>";

                request.get("datos.json", {
                    handleAs: "json"
                }).then(function(data){
                    resultado.innerHTML = "<h3>Usuarios cargados: </h3>";

                    data.usuarios.forEach(function(usuario){
                        domConstruct.create("p",{
                            innerHTML: usuario.nombre + " (" + usuario.edad + " años)"
                        }, resultado);
                    });
                }, function(error){
                    resultado.innerHTML = "<span style='color:red'> Error al cargar datos: " + error + "</span>";
                });
            });
        });