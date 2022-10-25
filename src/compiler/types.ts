export type IdentifierToken = { type: 'Identifier', value: string }
export type OpenParenToken = { type: 'OpenParenToken' }
export type CloseParenToken = { type: 'CloseParenToken' }
export type NumericLiteralToken = { type: 'NumericLiteral', value: string }
export type PlusToken = { type: 'PlusToken' }
export type MinusToken = { type: 'MinusToken' }
export type StringLiteralToken = { type:'StringLiteral', value:string }

export type Token =
  | IdentifierToken
  | OpenParenToken
  | CloseParenToken
  | NumericLiteralToken
  | PlusToken
  | MinusToken
  | StringLiteralToken


export type AdditiveOperator = PlusToken | MinusToken

export type NumericLiteralNode = { type: 'NumericLiteral', value: string }
export type CallExpressionNode = { type: 'CallExpression', identifier: IdentifierToken, argument: Node }
export type StartExpressionNode = { type: 'CallExpression', identifier: IdentifierToken, argument: Node }
export type BinaryExpressionNode = { type: 'BinaryExpression', left: Node, right: Node, operator: AdditiveOperator }
export type StringLiteralNode = { type: 'StringLiteral', identifier: StringLiteralNode, argument: Node }

export type Node =
  | NumericLiteralNode
  | CallExpressionNode
  | BinaryExpressionNode
  | StartExpressionNode
  | StringLiteralNode

export type Program = {
  body: Node[]
}