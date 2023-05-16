Feature: Pruebas ALICE
    
    Feature se realizaran las pruebas correspondientes a la App de almuerzos - ALICE

    Scenario: Deberá cargar la página de login correctamente --> CUF-01
        Given El usuario visitará la pagina
        Then Verifica que la URL sea la correcta

    Scenario: Datos de usuario válidos --> CUF-01
        Given El usuario visitará la página
        When Ingresará los datos de usuario y contraseña
        Then Se carga la interfaz de usuario 

    Scenario: Deberá mostrarle un mensaje de error al no ingresar usuario --> CUF-01
        Given El usuario visitará la página
        When No escribirá nombre de usuario e intentará loguear        
        Then Verifica que arroje mensaje de usuario inválido

    Scenario: Deberá mostrarle un mensaje de error al no ingresar clave --> CUF-01
        Given El usuario visitará la página
        When No escribirá la clave e intentará loguear        
        Then Verifica que arroje mensaje de no clave