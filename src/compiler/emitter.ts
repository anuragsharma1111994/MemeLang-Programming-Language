import { BinaryExpressionNode, CallExpressionNode, NumericLiteralNode, Program, Node,StringLiteralNode } from './types';

export function emitter(program: Program): string {
  function emit(node: Node): string {
    switch (node.type) {
      case 'NumericLiteral':
        return emitNumericLiteral(node);
      case 'BinaryExpression':
        return emitBinaryExpression(node);
      case 'CallExpression':
        return emitCallExpression(node);
      default:
        throw new SyntaxError('Unknown Node');
    }
  }
  function emitNumericLiteral(node: NumericLiteralNode) {
    return node.value;
  }

  function emitBinaryExpression(node: BinaryExpressionNode) {
    return `${emit(node.left)} ${node.operator.type === 'PlusToken' ? '+' : '-'} ${emit(node.right)}`;
  }

  function emitCallExpression(node: CallExpressionNode) {
    if (node.identifier.value === 'ek_tera_ek_mera') {
      return `console.log(${emit(node.argument)})`;
    }
    else if (node.identifier.value === 'testing') {
      return `console.log("Working")`;
    } 
    else {
      throw new SyntaxError(`Ye kya bawasir hai ${node.identifier}`);
    }
  }

  const output: string[] = [];
  for (const node of program.body) {
    output.push(emit(node));
  }
  return output.join('\n');
}