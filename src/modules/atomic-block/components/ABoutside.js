import { React } from '../dependencies'

import InsertHTML from '../../../tools/InsertHTML'

export default ({ 

    children,
    params,
    opt

  }) => (
    <InsertHTML
      type={ params.gridType }
      params={ params }
      opt={ opt }
      children={ children }
    />
)