import BaseAlert from './BaseAlert';

export default function B9() {
    return (
        <div>
            <BaseAlert type="success">Success Text</BaseAlert>
            <BaseAlert type="info">Info Text</BaseAlert>
            <BaseAlert type="warning">Warning Text</BaseAlert>
            <BaseAlert type="error">Error Text</BaseAlert>
        </div>
    );
}
