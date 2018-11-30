import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresas from './src/components/CenaEmpresas';
import CenaServicos from './src/components/CenaServicos';

let TransitionConfigurationSlider = () => {
  return {
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
      });

      return { opacity, transform: [{ translateX }] }
    }
  }
};

const app5 = StackNavigator({
  Principal: { screen: CenaPrincipal },
  Clientes: { screen: CenaClientes },
  Contatos: { screen: CenaContatos },
  Empresas: { screen: CenaEmpresas },
  Servicos: { screen: CenaServicos }
}, {
    headerMode: 'none',
    cardStyle: {
      backgroundColor: 'white'
    },
    transitionConfig: TransitionConfigurationSlider
  });

AppRegistry.registerComponent('app5', () => app5);
