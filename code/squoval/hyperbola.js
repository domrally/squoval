export const hyperbola = (sigmoid = Math.tanh) => t => {
    const { abs, cos, sin } = Math,

        cosine = cos(t),
        sine = sin(t),
        
        cotangent = cosine / abs(sine),
        tangent = sine / abs(cosine),

        x = sigmoid(cotangent),
        y = sigmoid(tangent)

    return { x, y }
}
