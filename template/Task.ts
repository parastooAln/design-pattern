import { AuditTrail } from './AuditTrail'
export abstract class Task {
    private auditTrail: AuditTrail;

    constructor(auditTrail: AuditTrail) {
        console.log("Base constructor")
        this.auditTrail = auditTrail;
    }

    execute = (task: string) => {
        this.auditTrail.record(task)
        this.doExecute()
    }

    abstract doExecute: () => void;
}