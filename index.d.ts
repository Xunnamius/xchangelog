/**
 * @typedef {import('conventional-changelog-config-spec').Config} XchangelogSpec
 */
/**
 * @typedef {import('conventional-changelog-core').Options.Config.Object} XchangelogConfigOptions
 */
/**
 * @typedef {import('conventional-changelog-core').Options} XchangelogOptions
 */
/**
 * @typedef {Omit<
 *   import('type-fest').OmitIndexSignature<
 *     import('conventional-changelog-writer').CommitKnownProps &
 *       import('conventional-commits-parser').Commit & {
 *         scope?: string | null;
 *         subject?: string | null;
 *         shortHash?: string | null;
 *       }
 *   >,
 *   'revert'
 * > & { revert?: Record<string, string | null | undefined> | null }} XchangelogCommit
 */
/**
 * @typedef {XchangelogSpec & XchangelogConfigOptions & {
 *   context: { packageName?: string },
 *   options: XchangelogOptions;
 *   parserOpts: import('conventional-commits-parser').ParserOptions;
 *   writerOpts: Omit<import('conventional-changelog-writer').Options<XchangelogCommit>, 'commitsSort'> & { commitsSort?: string[] }
 * }} XchangelogConfig
 */
/**
 * This function is a patched version of `conventionalChangelog` and works
 * identically.
 *
 * @param {import('conventional-changelog-core').Options<XchangelogCommit> & { cwd ?: string }} [options]
 * @param {import('conventional-changelog-core').Context} [context]
 * @param {import('conventional-changelog-core').GitRawCommitsOptions}
 * [gitRawCommitsOpts]
 * @param {import('conventional-changelog-core').ParserOptions} [parserOpts]
 * @param {import('conventional-changelog-core').WriterOptions<XchangelogCommit> & { includeDetails?: boolean }} [writerOpts]
 * @param {Record<string, unknown>} [gitRawExecOpts]
 * @returns {Readable}
 */
export default function conventionalChangelog(options?: (import("conventional-changelog-core").Options<XchangelogCommit, import("conventional-changelog-writer").Context<import("conventional-changelog-writer").CommitKnownProps>> & {
    cwd?: string;
}) | undefined, context?: import("conventional-changelog-core").Context | undefined, gitRawCommitsOpts?: import("conventional-changelog-core").GitRawCommitsOptions | undefined, parserOpts?: import("conventional-changelog-core").ParserOptions | undefined, writerOpts?: (import("conventional-changelog-core").WriterOptions<XchangelogCommit, import("conventional-changelog-writer").Context<import("conventional-changelog-writer").CommitKnownProps>> & {
    includeDetails?: boolean;
}) | undefined, gitRawExecOpts?: Record<string, unknown> | undefined): Readable;
export type XchangelogSpec = import("conventional-changelog-config-spec").Config;
export type XchangelogConfigOptions = import("conventional-changelog-core").Options.Config.Object;
export type XchangelogOptions = import("conventional-changelog-core").Options;
export type XchangelogCommit = Omit<import("type-fest").OmitIndexSignature<import("conventional-changelog-writer").CommitKnownProps & import("conventional-commits-parser").Commit & {
    scope?: string | null;
    subject?: string | null;
    shortHash?: string | null;
}>, "revert"> & {
    revert?: Record<string, string | null | undefined> | null;
};
export type XchangelogConfig = XchangelogSpec & XchangelogConfigOptions & {
    context: {
        packageName?: string;
    };
    options: XchangelogOptions;
    parserOpts: import("conventional-commits-parser").ParserOptions;
    writerOpts: Omit<import("conventional-changelog-writer").Options<XchangelogCommit>, "commitsSort"> & {
        commitsSort?: string[];
    };
};
import { Readable } from 'stream';
