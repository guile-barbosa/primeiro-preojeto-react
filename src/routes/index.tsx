import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* para cada pagina terei uma rota */}
    {/* Componente que será mostrado em tela quando o user acessar o / */}
    <Route path="/repository" component={Repository} />
    {/* o react router dom por padrão não faz uma verificação de igualdade , faz verificacao de inclusão , ou seja, se o caminho que estou acessando inclui o path, por isso passamos a propriedade exact que faz essa verificação */}
    {/* o switch possibilita que seja exbida apenas uma rota por vez */}
  </Switch>
);

export default Routes;
